
import"./FIFA.css"
import { Outlet } from 'react-router-dom'
import { NavSportsPages } from '../../components/NavSportsPages/NavSportsPages'



export const FIFA = () => {


  return (
    <>
        <NavSportsPages sport={'fifa'} />

        <Outlet/>
      
      </>
  )
}
