import { useAuth } from "../../context/authContext"

export const FavGallery = () => {
  const { user } = useAuth()
  return (
    <>
      <h1>{user.user}'s Favorite _________</h1>
      <section className="favGallery">
        
      </section>
    </>
  )
}
