export const NavFav = ({ setFav , favChildren }) => {
  return (
    <nav>
      <button onClick={() => {setFav("fifa")
    favChildren('favPlayers')}}>FIFA</button>
      <button onClick={() => {
        setFav("motoGP") 
        favChildren('favRiders')}}>MotoGP</button>
      <button onClick={() => {setFav("powerlifting") 
      favChildren('favLifters')}}>Powerlifting</button>
    </nav>
  );
};
