
import { useAuth } from '../../context/authContext'
import './UserProfileData.css'

export const UserProfileData = () => {
const { user } = useAuth()

console.log(user)

  return (
   <>
         <div className='info-user'>
        <figure className='profile-picture'>
            <img src={user?.image} alt='user image' className='profile-picture-user'/>
            <div>
          <p>{user?.name}</p>
          <p>{user?.interestedIn}</p>
          <div>
            
             <p> {(user?.followers == undefined) ? '0 followers' : `${user.followers} followers`}</p>
             <p> {(user?.followed == undefined) ? '0 following' : `${user.followed} following`}</p>
             <p> {(user?.comments == undefined) ? '0 comments' : `${user?.comments?.length} following`}</p>
          </div>
          <p> {(user?.yourteam !== undefined) && `Your team ${user.yourteam}`}</p>
          <p> {(user?.yourPodium !== undefined) && `Your team ${user.yourPodium}`}</p>
          </div>

        </figure>
        </div>
   </>
  )
}
