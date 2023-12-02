import './Profile.css'
import { NavProfile } from '../../components/index'
import { Outlet } from "react-router-dom"
import { UserProfileData } from '../UserProfileData/UserProfileData'

export const Profile = () => {
  return (
    <div className='profileDiv'>
     <NavProfile />
     <div className='divOutletProfile'>
      <Outlet />
      </div>
    </div>
  )
}
