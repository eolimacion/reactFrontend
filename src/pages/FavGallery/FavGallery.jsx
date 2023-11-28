import { useAuth } from "../../context/authContext"
import { CardPlayer } from "../../components/CardPlayer/CardPlayer"
import { useEffect } from "react"

export const FavGallery = () => {
  const { user } = useAuth()

  const pathName = window.location.pathname
  const sportFavName = pathName.slice(20)

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
        return controller

      case "elevens":
        controller = "getFavElevens"
        break;

      case "riders":
        controller = "getFavRiders"
        break;

      case "circuits":
        controller = "getFavCircuits"
        break;

      case "podiums":
        controller = "getFavPodiums"
        break;

      case "lifters":
        controller = "getFavLifters"
        break;

      case "categories":
        controller = "getFavCategories"
        break;

      default:
        return "hola"
        break;
    }
  }

  useEffect(() => {
    setControllerFav()

  }, [])

  return (
    <>
      <h1>{user.user}'s {sportFavName}'s Favorites</h1>
      <div id = "displayFavFifaModels" style={{display: "flex"}}>
        <button onClick={(e) => setControllerFav(e.target.innerText)} >Players</button>
        <button onClick={(e) => setControllerFav(e.target.innerText)}>Teams</button>
        {/* <h3 onClick={setControllerFav("elevens")}>Elevens</h3> */}
      </div>
      {/* <div id = "displayFavMotoGpModels" style={{display: "none"}}>
        <h3 onClick={setControllerFav("riders")}>Riders</h3>
        <h3 onClick={setControllerFav("circuits")}>Circuits</h3>
        <h3 onClick={setControllerFav("podiums")}>Podiums</h3>
      </div>
      <div id = "displayFavPowerLiftingModels" style={{display: "none"}}>
        <h3 onClick={setControllerFav("lifters")}>Lifters</h3>
        <h3 onClick={setControllerFav("categories")}>Categories</h3>
      </div> */}

      <section className="favGallery">
        {console.log(controller)}
        {controller && <CardPlayer controller={controller}/>}

      </section>
    </>
  )
}
