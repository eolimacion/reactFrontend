import { useEffect, useState } from "react"
import { getUserById, toggleFollow } from "../../services/user.service"
import { useParams } from "react-router-dom"
import { Loading, UserPodium } from "../../components"
import "./UserPage.css"
import { useAuth } from "../../context/authContext"
import { Profile } from "../Profile/Profile"
import { PodiumContainer } from "../../components/PodiumContainer/PodiumContainer"

export const UserPage = () => {
  //! Estados ------------------------------------
  const [userData, setUserData] = useState()
  const [res, setRes] = useState(null)
  const [ok, setOk] = useState(false)
  const [isFollowing, setisFollowing] = useState(false)
  const [renderContent, setRenderContent] = useState("")

  //! Destructuring ------------------------------
  const {id} = useParams()
  const {user} = useAuth()

  //! 1. al cargar => TRAEMOS TODA LA INFO DEL USER LOGEADO (para estado del follow)
  const fetchDataUser = async () => {
    let resDataUser = await getUserById(user._id)
    // console.log(resDataUser)
    setUserData(resDataUser)
  }

  useEffect(() => {
    fetchDataUser()
  }, [])


  //! 2. al hacer paso 1 (traer info) => TRAEMOS INFO DEL USUARIO DE LA PAGINA (para pintar)
  const fetchUserPage = async () => {
    setRes(await getUserById(id))
    setOk(true)
  }
  
  useEffect(() => { //? miramos si en el array de followed está el id del user para pintar Follow/Unfollow
    if (userData?.status == 200) {
      userData.data.followed.map((user) => {
        user._id == id ? setisFollowing(true) : null
      })
      fetchUserPage()
    }
  }, [userData])

  //! 3. al hacer click en follow => CAMBIAMOS ESTADO DEL FOLLOW Y RENDERIZAMOS TODO DE NUEVO (para tener data actualizada)
  const handleFollow = async () => {
    let executeToggleFollow = await toggleFollow(res.data._id)
    setisFollowing(!isFollowing)
  }

  return (
    <>
      {!ok && <Loading/>}
      {ok && (
        <div id = "userPagePage">
          <section id = "userPageTopContainer">
            <img src={res.data.image} alt={res.data.name} id="userPageImage"/>
            <div id = "userPageMainInfoNav">
              <div>
                <h1 id="userPageName">{res.data.name}</h1>
                <div id = "userPageInterestFollow">
                  <p id="userPageInterest">Is here for <span>{res.data.interestedIn}</span></p>
                  <button id = "followUserButton" onClick={handleFollow}>
                    {isFollowing ? "Unfollow" : "Follow"}
                  </button>
                </div>
              </div>
            </div>
          </section>
          <nav id = "userPageNav">
            <button onClick={() => setRenderContent("eleven")}>{res.data.name}'s Eleven</button>
            <button onClick={() => setRenderContent("podium")}>{res.data.name}'s Podium</button>
            <button onClick={() => setRenderContent("favorites")}>{res.data.name}'s Favorites</button>
          </nav>
          <section id = "userPageInfo">
            {((renderContent == "eleven") || (renderContent == "")) &&
              <h2>eleven</h2>
            }
            {renderContent == "podium" &&
              <UserPodium page = "userPage" podiumId = {res.data.yourPodium[0]._id}/>
            }
            {renderContent == "favorites" &&
              <h2>favorites</h2>
            }
          </section>
        </div>
      )}
    </>
  )
}
