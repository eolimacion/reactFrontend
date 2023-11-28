import { useState } from "react";
import { useAuth } from "../../context/authContext";

export const CardPlayer = () => {
  const { user } = useAuth()
  const [ favPlayers, setFavPlayers ] = useState()
  const [ favRiders, setFavRiders ] = useState()
  const [ favLifters, setFavLifters ] = useState()


  const printCardPlayer = async () => {
    switch (controller) {
      case "getFavPlayers":
        const resFavPlayers = await getUsersFavPlayers(user._id)
        setFavPlayers(resFavPlayers.data)
        return favPlayers

      case "getFavRiders":
        const resFavRiders = await getUsersFavRiders(user._id)
        setFavRiders(resFavRiders.data)
        return favRiders

      case "getFavLifters":
        const resFavLifters = await getUsersFavLifters(user._id)
        setFavLifters(resFavLifters.data)
        return favLifters
    
      default:
        break;
    }
  }
  return (
    <div>CardPlayer</div>
  )
}
