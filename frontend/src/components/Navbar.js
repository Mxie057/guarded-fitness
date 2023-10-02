import{ Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <div className ="container">
                <Link to ="/"><h1>Guarded</h1></Link>
                <Link to ="workouts"><h3>Workout</h3></Link>
            </div>
        </header>
    )
}

export default Navbar;