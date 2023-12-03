import Button from '@mui/material/Button';

export const NavFavChildren = ({ classname, fav, setFavChildren, favChildren }) => {
  switch (fav) {
    case "fifa":
      return (
        <nav className='secondNavFav' id="displayFavFifaModels">
          <Button variant="contained"  style= {{backgroundColor: 'var(--color-boton-motogp)', margin: '1rem 0.5rem'}} autoFocus onClick={() => setFavChildren("favPlayers")}>Players</Button>
          <Button variant="contained" style= {{backgroundColor: 'var(--color-boton-motogp)', margin: '0.5rem'}} onClick={() => setFavChildren("favTeams")}>Teams</Button>
          <Button variant="contained" style= {{backgroundColor: 'var(--color-boton-motogp)', margin: '0.5rem'}} onClick={() => setFavChildren("favElevens")}>Elevens</Button>
          {/* <button className="profileFavSecondaryButtons" autoFocus onClick={() => setFavChildren("favPlayers")}>Players</button>
          <button className="profileFavSecondaryButtons" onClick={() => setFavChildren("favTeams")}>Teams</button>
          <button className="profileFavSecondaryButtons" onClick={() => setFavChildren("favElevens")}>Elevens</button> */}
        </nav>
      );

    case "powerlifting":
      return (

        <nav className='secondNavFav' id="displayFavPowerLiftingModels">
          <Button variant="contained" style= {{backgroundColor: 'var(--color-boton-motogp)', margin: '1rem 0.5rem'}} onClick={() => setFavChildren("favLifters")}>Lifters</Button>
          <Button variant="contained" style= {{backgroundColor: 'var(--color-boton-motogp)', margin: ' 1rem 0.5rem'}} onClick={() => setFavChildren("favWeightCategories")}>Categories</Button>
{/*           
          <button className="profileFavSecondaryButtons" onClick={() => setFavChildren("favLifters")}>Lifters</button>
          <button className="profileFavSecondaryButtons" onClick={() => setFavChildren("favWeightCategories")}>
            Categories
          </button> */}
        </nav>
      );

    case "motoGP":
      return (
        <nav className='secondNavFav' id="displayFavMotoGpModels">
           <Button variant="contained" style= {{backgroundColor: 'var(--color-boton-motogp)', margin: '1rem 0.5rem'}} onClick={() => setFavChildren("favRiders")}>Riders</Button>
           <Button variant="contained" style= {{backgroundColor: 'var(--color-boton-motogp)', margin: '1rem 0.5rem'}} onClick={() => setFavChildren("favCircuits")}>Circuits</Button>
           <Button variant="contained" style= {{backgroundColor: 'var(--color-boton-motogp)', margin: '1rem 0.5rem'}} onClick={() => setFavChildren("favPodiums")}>Podiums</Button>
          {/* <button className="profileFavSecondaryButtons" onClick={() => setFavChildren("favRiders")}>Riders</button>
          <button className="profileFavSecondaryButtons" onClick={() => setFavChildren("favCircuits")}>Circuits</button>
          <button className="profileFavSecondaryButtons" onClick={() => setFavChildren("favPodiums")}>Podiums</button> */}
        </nav>
      );

    default:
      break;
  }
};
