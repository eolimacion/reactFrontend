import { useAuth } from "../../context/authContext"
import { CardPlayer } from "../../components/CardPlayer/CardPlayer"
import { useEffect, useState } from "react"

export const FavGallery = () => {
  const { user } = useAuth()
  const [ show, setShow ] = useState(false)

  const pathName = window.location.pathname
  const sportFavName = pathName.slice(20)

  //!FIX ---------------------------- 

  // switch (sportFavName) {
  //   case "FIFA":
  //     const modelosFifa = document.getElementById("displayFavFifaModels")
  //     modelosFifa.style.display = "flex"
  //     break;

  //   case "MotoGP":
  //     const modelosMotoGp = document.getElementById("displayFavMotoGpModels")
  //     modelosMotoGp.style.display = "flex"
  //     break;
  
  //   case "PowerLifting":
  //     const modelosPowerLifting = document.getElementById("displayFavPowerLiftingModels")
  //     modelosPowerLifting.style.display = "flex"
  //     break;

  //   default:
  //     break;
  // }

  let controller
  const setControllerFav = (nombreController) => {
    console.log("me ejecuto")
    switch (nombreController) {
      case "Players":
        controller = "getFavPlayers"
        console.log("estoy en players")
        break;
        
      case "Teams":
        controller = "getFavTeams"
        console.log("estoy en teams")
        break;

      case "Elevens":
        controller = "getFavElevens"
        break;

      case "Riders":
        controller = "getFavRiders"
        break;

      case "Circuits":
        controller = "getFavCircuits"
        break;

      case "Podiums":
        controller = "getFavPodiums"
        break;

      case "Lifters":
        controller = "getFavLifters"
        break;

      case "Categories":
        controller = "getFavCategories"
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
      <div id = "displayFavFifaModels" style={{display: "flex"}}>
        <button onClick={(e) => setControllerFav(e.target.innerText)}>Players</button>
        <button onClick={(e) => setControllerFav(e.target.innerText)}>Teams</button>
        <button onClick={(e) => setControllerFav(e.target.innerText)}>Elevens</button>
      </div>
      <div id = "displayFavMotoGpModels" style={{display: "none"}}>
        <button onClick={(e) => setControllerFav(e.target.innerText)}>Riders</button>
        <button onClick={(e) => setControllerFav(e.target.innerText)}>Circuits</button>
        <button onClick={(e) => setControllerFav(e.target.innerText)}>Podiums</button>
      </div>
      <div id = "displayFavPowerLiftingModels" style={{display: "none"}}>
        <button onClick={(e) => setControllerFav(e.target.innerText)}>Lifters</button>
        <button onClick={(e) => setControllerFav(e.target.innerText)}>Categories</button>
      </div>

      <section className="favGallery">
        {show ? <CardPlayer controller={controller}/> : null}
      </section>
    </>
  )
}
