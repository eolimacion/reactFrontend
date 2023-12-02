import { useState } from 'react'
import './DarkMode.css'
import { useAuth } from '../../context/authContext'

export const DarkMode = () => {

const { darkMode, setDarkMode } = useAuth()


//!--------------- DARK MODE --------------------
if(darkMode){
    let root = document.documentElement
    root.style.setProperty("--color-background", "#252424")
    root.style.setProperty("--color-enhance", "#121212")
}




//!--------------- LIGHT MODE --------------------
if(!darkMode){
    let root = document.documentElement
    root.style.setProperty("--color-background", "#f5f4f4")
    root.style.setProperty("--color-enhance", "#Fafafa")
}



  return (
    <>
    <button className='darkModeBtn' onClick={()=> setDarkMode(!darkMode)}  >
        { darkMode ? "Light Mode" : "Dark Mode"}
    </button>
    </>
  )
}
