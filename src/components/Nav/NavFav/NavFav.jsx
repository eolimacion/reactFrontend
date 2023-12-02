export const NavFav = ({ setFav , setFavChildren }) => {
  return (
    <nav className='firstNavFav'>
      <button className="profileFavMainButtons" onClick={() => {setFav("fifa")
    setFavChildren('favPlayers')}}>FIFA</button>
      <button className="profileFavMainButtons" onClick={() => {
        setFav("motoGP") 
        setFavChildren('favRiders')}}>MotoGP</button>
      <button className="profileFavMainButtons" onClick={() => {setFav("powerlifting") 
      setFavChildren('favLifters')}}>Powerlifting</button>
    </nav>
  );
};
