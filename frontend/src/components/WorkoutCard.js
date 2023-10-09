import { formatDistance } from "date-fns";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const WorkoutCard = ({ workout }) => {
    const { dispatch } = useWorkoutsContext();

    const handleClick = async () => {
        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE'
        });
        const json = await response.json();

        if (response.ok){
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }

    return (
        <div className="workout-card">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>

        // <Row xs={1} md={2} className="workout-card">
        // {Array.from({ length: 1 }).map((_, idx) => (
        // <Col key={idx}>
        //     <Card>
        //     <Card.Body>
        //         <Card.Title>{workout.title}</Card.Title>
        //         <Card.Text>
        //         Load: {workout.load}<br></br>
        //         Reps: {workout.reps}<br></br>
        //         {formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}<br></br>
        //         <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        //         </Card.Text>
        //     </Card.Body>
        //     </Card>
        // </Col>
        // ))}
        // </Row>
    )
}

export default WorkoutCard;