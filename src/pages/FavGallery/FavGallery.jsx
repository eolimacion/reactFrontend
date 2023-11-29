import { useAuth } from "../../context/authContext"
import { CardPlayer } from "../../components/CardPlayer/CardPlayer"
import { useEffect, useState } from "react"

export const FavGallery = () => {
  const { user } = useAuth()
  const [ show, setShow ] = useState(false)
  const [ controller, setController ] = useState()

  const pathName = window.location.pathname
  const sportFavName = pathName.slice(20)

  //!FIX ---------------------------- 

  switch (sportFavName) {
    case "FIFA":
      const modelosFifa = document.getElementById("displayFavFifaModels")
      modelosFifa.style.visibility = "visible"
      break;

    case "MotoGP":
      const modelosMotoGp = document.getElementById("displayFavMotoGpModels")
      modelosMotoGp.style.visibility = "visible"
      break;
  
    case "PowerLifting":
      const modelosPowerLifting = document.getElementById("displayFavPowerLiftingModels")
      modelosPowerLifting.style.visibility = "visible"
      break;

    default:
      break;
  }

  const setControllerFav = (nombreController) => {
    console.log("me ejecuto")
    switch (nombreController) {
      case "Players":
        setController("getFavPlayers")
        console.log("estoy en players")
        break;
        
      case "Teams":
        setController("getFavTeams")
        console.log("estoy en teams")
        break;

      case "Elevens":
        setController("getFavElevens")
        break;

      case "Riders":
        setController("getFavRiders")
        break;

      case "Circuits":
        setController("getFavCircuits")
        break;

      case "Podiums":
        setController("getFavPodiums")
        break;

      case "Lifters":
        setController("getFavLifters")
        break;

      case "Categories":
        setController("getFavCategories")
        break;

      default:
        console.log("no hay controller")
        break;
    }
    console.log(show)
    setShow(true)
    console.log(show)
  }

  return (
    <>
      <h1>{user.user}'s {sportFavName}'s Favorites</h1>
      <div id = "displayFavFifaModels" style={{visibility: "hidden"}}>
        <button onClick={(e) => setControllerFav(e.target.innerText)}>Players</button>
        <button onClick={(e) => setControllerFav(e.target.innerText)}>Teams</button>
        <button onClick={(e) => setControllerFav(e.target.innerText)}>Elevens</button>
      </div>
      <div id = "displayFavMotoGpModels" style={{visibility: "hidden"}}>
        <button onClick={(e) => setControllerFav(e.target.innerText)}>Riders</button>
        <button onClick={(e) => setControllerFav(e.target.innerText)}>Circuits</button>
        <button onClick={(e) => setControllerFav(e.target.innerText)}>Podiums</button>
      </div>
      <div id = "displayFavPowerLiftingModels" style={{visibility: "hidden"}}>
        <button onClick={(e) => setControllerFav(e.target.innerText)}>Lifters</button>
        <button onClick={(e) => setControllerFav(e.target.innerText)}>Categories</button>
      </div>

      <section className="favGallery">
        {show ? <CardPlayer controller={controller}/> : null}
      </section>
    </>
  )
}
