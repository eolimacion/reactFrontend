export const NavFavChildren = ({ classname, fav, setFavChildren }) => {
  switch (fav) {
    case "fifa":
      return (
        <nav className='secondNavFav' id="displayFavFifaModels">
          <button className="profileFavSecondaryButtons" autoFocus onClick={() => setFavChildren("favPlayers")}>Players</button>
          <button className="profileFavSecondaryButtons" onClick={() => setFavChildren("favTeams")}>Teams</button>
          <button className="profileFavSecondaryButtons" onClick={() => setFavChildren("favElevens")}>Elevens</button>
        </nav>
      );

    case "powerlifting":
      return (
        <nav className='secondNavFav' id="displayFavPowerLiftingModels">
          <button className="profileFavSecondaryButtons" onClick={() => setFavChildren("favLifters")}>Lifters</button>
          <button className="profileFavSecondaryButtons" onClick={() => setFavChildren("favWeightCategories")}>
            Categories
          </button>
        </nav>
      );

    case "motoGP":
      return (
        <nav className='secondNavFav' id="displayFavMotoGpModels">
          <button className="profileFavSecondaryButtons" onClick={() => setFavChildren("favRiders")}>Riders</button>
          <button className="profileFavSecondaryButtons" onClick={() => setFavChildren("favCircuits")}>Circuits</button>
          <button className="profileFavSecondaryButtons" onClick={() => setFavChildren("favPodiums")}>Podiums</button>
        </nav>
      );

    default:
      break;
  }
};
