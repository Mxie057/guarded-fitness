import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

// Components
import WorkoutCard from "../components/WorkoutCard";
import WorkoutForm from "../components/WorkoutForm";
import AddWorkout from "../components/AddWorkout";

const WorkoutPage = () => {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="addWorkout-section">
        <AddWorkout />
      </div>
      <div className="workoutCards">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutCard key={workout._id} workout={workout} />
          ))}
      </div>
    </div>
  );
};

export default WorkoutPage;
