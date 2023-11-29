export const NavFavChildren = ({ fav, favChildren }) => {
  switch (fav) {
    case "fifa":
      return (
        <nav id="displayFavFifaModels">
          <button onClick={() => favChildren("favPlayers")}>Players</button>
          <button onClick={() => favChildren("favTeams")}>Teams</button>
          <button onClick={() => favChildren("favElevens")}>Elevens</button>
        </nav>
      );

    case "powerlifting":
      return (
        <nav id="displayFavPowerLiftingModels">
          <button onClick={() => favChildren("favLifters")}>Lifters</button>
          <button onClick={() => favChildren("favWeightCategories")}>
            Categories
          </button>
        </nav>
      );

    case "motoGP":
      return (
        <nav id="displayFavMotoGpModels">
          <button onClick={() => favChildren("favRiders")}>Riders</button>
          <button onClick={() => favChildren("favCircuits")}>Circuits</button>
          <button onClick={() => favChildren("favPodiums")}>Podiums</button>
        </nav>
      );

    default:
      break;
  }
};
