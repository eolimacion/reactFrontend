import React from 'react'
import"./MotoGP.css"
import { NavLink } from 'react-router-dom'
export const MotoGP = () => {
  return (<>
  <NavLink to="/motogp/riders"> GO TO RIDERS</NavLink>
    <NavLink to="/motogp/circuits"> GO TO CIRCUITS</NavLink></>
    
   
  )
}
