import { useEffect, useState } from "react"
import { getUserById, toggleFollow } from "../../services/user.service"
import { useParams } from "react-router-dom"
import { Loading } from "../../components"
import "./UserPage.css"
import { useAuth } from "../../context/authContext"

export const UserPage = () => {
  //! Estados ------------------------------------
  const [userData, setUserData] = useState()
  const [res, setRes] = useState(null)
  const [ok, setOk] = useState(false)
  const [isFollowing, setisFollowing] = useState()

  //! Destructuring ------------------------------
  const {id} = useParams()
  const {user} = useAuth()

  //! 1. al cargar => TRAEMOS TODA LA INFO DEL USER LOGEADO (para estado del follow)
  const fetchDataUser = async () => {
    setUserData(await getUserById(user._id))
  }

  useEffect(() => {
    fetchDataUser()
  }, [])


  //! 2. al hacer paso 1 (traer info) => TRAEMOS INFO DEL USUARIO DE LA PAGINA (para pintar)
  const fetchUserPage = async () => {
    setRes(await getUserById(id))
    setOk(true)
  }
  
  useEffect(() => {
    if (userData?.status == 200) {
      fetchUserPage()
      if (userData.data.followed.includes(id)) {
        setisFollowing(true)
      } else {
        setisFollowing(false)
      }
    }
  }, [userData])

  //! 3. al hacer click en follow => CAMBIAMOS ESTADO DEL FOLLOW Y RENDERIZAMOS TODO DE NUEVO (para tener data actualizada)
  const handleFollow = async (e) => {
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
                  <button id = "followUserButton" onClick={(e) => handleFollow(e)}>
                    {isFollowing ? "Unfollow" : "Follow"}
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section id = "userPageInfo">
            <h2>hola</h2>
          </section>
        </div>
      )}
    </>
  )
}
