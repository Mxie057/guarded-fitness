import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
import WorkoutPage from "./pages/WorkoutPage";
import Hero from "./components/Hero";

function App() {
  return (
          <div className="App">
              <BrowserRouter>
                  <Navbar />
                  <div className="pages">
                      <Routes>
                          <Route path ="/" element={<Hero/>}/>
                          <Route path ="/workouts" element={<WorkoutPage/>}/>
                      </Routes>
                  </div>
              </BrowserRouter>
          </div>
  )
}

export default App
