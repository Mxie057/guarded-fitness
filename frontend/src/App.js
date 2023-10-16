import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages and Components
import Home from './pages/Home';
import WorkoutPage from './pages/WorkoutPage';
import Navibar from './components/Navibar'
import Hero from './components/Hero';
import Login from'./pages/Login';
import Signup from'./pages/Signup';

function App() {
  return (
    <div className="App">

      <Navibar />
        <div className="pages">
          <Routes>
            <Route path ="/" element={<Home/>}/>
            <Route path ="/workouts" element={<WorkoutPage/>}/>
            <Route path ="/login" element={<Login/>}/>
            <Route path ="/signup" element={<Signup/>}/>
          </Routes>
        </div>

    </div>
  );
}

export default App;
