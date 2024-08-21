import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.min.css';

import './index.css'
import Layout from './layout'
import Mnemonics from './components/Main/Mnemonics'
import Parent from './components/Main/Parent';
import { Buffer } from 'buffer';
window.Buffer = Buffer;





const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element: <Parent/>
        
      }
    ]
    
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
