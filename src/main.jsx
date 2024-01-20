 import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import  { BrowserRouter } from 'react-router-dom'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/dist/modal.js'
import 'bootstrap-icons/font/bootstrap-icons.json'
import 'bootstrap/js/dist/dropdown.js'
import 'bootstrap/js/dist/popover.js'
import 'bootstrap/js/dist/base-component.js'
import 'bootstrap/js/src/util/focustrap.js'
import 'animate.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
    <App />
  </BrowserRouter>

  </React.StrictMode>
 ,
)
