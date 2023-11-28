import { useAuth } from "../../context/authContext"
import { CardPlayer } from "../CardPlayer/CardPlayer"

export const FavGallery = () => {
  const { user } = useAuth()
  return (
    <>
      <h1>{user.user}'s Favorite _________</h1>
      <section className="favGallery">
          <CardPlayer controller="getFavPlayers"/>
      </section>
    </>
  )
}
