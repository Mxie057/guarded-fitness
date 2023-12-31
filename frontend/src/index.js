import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutContextProvider } from './context/WorkoutContext';
import { AuthContextProvider } from './context/AuthContext';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <WorkoutContextProvider>
        <App />
      </WorkoutContextProvider> 
    </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
