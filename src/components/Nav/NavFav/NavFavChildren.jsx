export const NavFavChildren = ({ fav, setFavChildren }) => {
  switch (fav) {
    case "fifa":
      return (
        <nav id="displayFavFifaModels">
          <button onClick={() => setFavChildren("favPlayers")}>Players</button>
          <button onClick={() => setFavChildren("favTeams")}>Teams</button>
          <button onClick={() => setFavChildren("favElevens")}>Elevens</button>
        </nav>
      );

    case "powerlifting":
      return (
        <nav id="displayFavPowerLiftingModels">
          <button onClick={() => setFavChildren("favLifters")}>Lifters</button>
          <button onClick={() => setFavChildren("favWeightCategories")}>
            Categories
          </button>
        </nav>
      );

    case "motoGP":
      return (
        <nav id="displayFavMotoGpModels">
          <button onClick={() => setFavChildren("favRiders")}>Riders</button>
          <button onClick={() => setFavChildren("favCircuits")}>Circuits</button>
          <button onClick={() => setFavChildren("favPodiums")}>Podiums</button>
        </nav>
      );

    default:
      break;
  }
};
