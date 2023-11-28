import { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import { getUsersFavElevens, getUsersFavLifters, getUsersFavPlayers, getUsersFavRiders, getUsersFavTeams } from "../../services/user.service";

export const CardPlayer = ({ controller }) => {
  console.log("soy controller en cardplayer " + controller)
  const { user } = useAuth()
  const [ prueba, setPrueba ] = useState()


  const printCardItem = async () => {
    switch (controller) {
      case "getFavPlayers":
        const resFavPlayers = await getUsersFavPlayers(user._id)
        console.log(resFavPlayers.data)
        return resFavPlayers.data

      case "getFavTeams":
        const resFavTeams = await getUsersFavTeams(user._id)
        return resFavTeams.data

      case "getFavElevens":
        const resFavElevens = await getUsersFavElevens(user._id)
        return resFavElevens.data

      case "getFavRiders":
        const resFavRiders = await getUsersFavRiders(user._id)
        return resFavRiders.data

      case "getFavLifters":
        const resFavLifters = await getUsersFavLifters(user._id)
        return resFavLifters.data
    
      default:
        break;
    }
  }

  useEffect(() => {
    const getData = async () => {
      setPrueba(await printCardItem())
    }
    getData()
  }, [])

  console.log("estoy pintando esto: " + prueba)
  return (
    <>
      {prueba && prueba.map((item) => {
        return (
          <section className="singleItemCard" key={item._id}>
            <img className="singleItemImg" src={item.image} alt={item.name} />
            <h2 className="singleItemName">{item.name}</h2>
          </section>
        )
      })}
    </>
  )
}
