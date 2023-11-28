import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes.jsx'
import { AuthContextProvider } from './context/authContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthContextProvider>
   <RouterProvider router={router}/>
   </AuthContextProvider>
    
  </React.StrictMode>,
)