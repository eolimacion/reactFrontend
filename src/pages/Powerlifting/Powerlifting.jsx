import React from 'react'
import"./Powerlifting.css"
import { NavLink } from 'react-router-dom'
export const Powerlifting = () => {
  return (
    <>
    <NavLink to="/powerlifting/lifters"> GO TO LIFTERS</NavLink>
      <NavLink to="/powerlifting/weight"> GO TO CATEGORIES</NavLink></>
  )
}
