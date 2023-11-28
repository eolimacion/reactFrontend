import './Profile.css'
import { NavProfile } from '../../components/index'
import { Outlet } from "react-router-dom"

export const Profile = () => {
  return (
    <div className='profileDiv'>
      <div className='divNavProfile'>
     <NavProfile />
     </div>
     <div className='divOutletProfile'>
      <Outlet />
      </div>
    </div>
  )
}
