import Button from '@mui/material/Button';


export const NavFav = ({ setFav , setFavChildren }) => {
  return (
    <nav className='firstNavFav'>
      <Button variant="contained" size= 'large' style= {{backgroundColor: 'white', color: 'var(--color-boton-motogp)', fontWeight: '600', fontSize: '15px', margin: '1rem', width: '150px'}} onClick={() => {setFav("fifa")
    setFavChildren('favPlayers')}}>FIFA</Button>
      {/* <button className="profileFavMainButtons" onClick={() => {setFav("fifa")
    setFavChildren('favPlayers')}}>FIFA</button> */}

<Button variant="contained" size= 'large' style= {{backgroundColor: 'white', color: 'var(--color-boton-motogp)', fontWeight: '600', fontSize: '15px', margin: '0.5rem', width: '150px'}} onClick={() => {
        setFav("motoGP") 
        setFavChildren('favRiders')}}>MotoGP</Button>

      {/* <button className="profileFavMainButtons" onClick={() => {
        setFav("motoGP") 
        setFavChildren('favRiders')}}>MotoGP</button> */}

<Button variant="contained" size= 'large' style= {{backgroundColor: 'white', color: 'var(--color-boton-motogp)', fontWeight: '600', fontSize: '15px', margin: '0.5rem', width: '150px'}} onClick={() => {setFav("powerlifting") 
      setFavChildren('favLifters')}}>Powerlifting</Button>


{/* 
      <button className="profileFavMainButtons" onClick={() => {setFav("powerlifting") 
      setFavChildren('favLifters')}}>Powerlifting</button> */}
    </nav>
  );
};
