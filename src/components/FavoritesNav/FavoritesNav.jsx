import { Link } from "react-router-dom";

//este no esta en el perfil!!!!

export const FavoritesNav = () => {
  const fifa = "FIFA";
  const motogp = "MotoGP";
  const powerlifting = "PowerLifting"
  return (
    <>
    <div className="profileButtonsContainer">
      <Link className="profileButton" to = {`/profile/favourites/${fifa}`}>
        <h3 >FIFA</h3>
      </Link>
      <Link className="profileButton" to = {`/profile/favourites/${motogp}`}>
        <h3>MotoGP</h3>
      </Link>
      <Link className="profileButton" to = {`/profile/favourites/${powerlifting}`}>
        <h3>PowerLifting</h3>
      </Link>
      </div>
    </>
  )
}
