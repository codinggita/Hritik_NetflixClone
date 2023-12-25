import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Body from './Body';
import Section3 from './Section3.jsx'
import Section4 from './Section4.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Body />
    <Section3 />
    <Section4></Section4>
  </React.StrictMode>,
)
