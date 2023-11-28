import { Link } from "react-router-dom";

export const FavoritesNav = () => {
  const fifa = "FIFA";
  const motogp = "MotoGP";
  const powerlifting = "PowerLifting"
  return (
    <>
      <Link to = {`/profile/favourites/${fifa}`}>
        <h3>FIFA</h3>
      </Link>
      <Link to = {`/profile/favourites/${motogp}`}>
        <h3>MotoGP</h3>
      </Link>
      <Link to = {`/profile/favourites/${powerlifting}`}>
        <h3>PowerLifting</h3>
      </Link>
    </>
  )
}
