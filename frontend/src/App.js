import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages and Components
import Home from './pages/Home';
import WorkoutPage from './pages/WorkoutPage';
import Navbar from './components/Navbar'
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className="pages">
          <Routes>
            <Route path ="/" element={<Home/>}/>
            <Route path ="/workouts" element={<WorkoutPage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      <Hero></Hero>
    </div>
  );
}

export default App;
