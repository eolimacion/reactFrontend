import React from 'react'
import"./FIFA.css"
import { NavLink } from 'react-router-dom'
export const FIFA = () => {
  return (<>
    <NavLink to="/fifa/players"> GO TO PLAYERS</NavLink>
    <NavLink to="/fifa/teams"> GO TO Teams</NavLink>
   
  </>
  
  )
}
