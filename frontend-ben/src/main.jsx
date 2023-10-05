import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WorkoutContextProvider } from './context/WorkoutContext';
import {MantineProvider} from "@mantine/core";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <MantineProvider>
          <WorkoutContextProvider>
              <App />
          </WorkoutContextProvider>
      </MantineProvider>

  </React.StrictMode>,
)
