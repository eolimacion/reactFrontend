export const NavFav = ({ setFav , setFavChildren }) => {
  return (
    <nav>
      <button onClick={() => {setFav("fifa")
    setFavChildren('favPlayers')}}>FIFA</button>
      <button onClick={() => {
        setFav("motoGP") 
        setFavChildren('favRiders')}}>MotoGP</button>
      <button onClick={() => {setFav("powerlifting") 
      setFavChildren('favLifters')}}>Powerlifting</button>
    </nav>
  );
};
