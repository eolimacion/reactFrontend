import { useAuth } from '../../context/authContext';
import './Home.css'
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();



  return (
    <>
    <div className="containerGeneral">
    <div className="divTextoHome">
    <h1 className="titleHome">Welcome to our Sports App!</h1>
    <p className="textHomeWelcome">
    Discover the exciting world of soccer, MotoGP and Powerlifting in our easy-to-use app. 
    Register in seconds and explore three exciting sections customized to your interests.
    </p>
    <h1 className="titlePassion">Your Passion, Your Experience:</h1>
    <p className="textHomePassion">
    Immerse yourself in soccer, the speed of MotoGP and the power of Powerlifting with just a few clicks. 
    Create your ideal team, follow your favorite players, pilots or weightlifters.
    </p>
    <h1 className="titlePersonalize">Personalize and Share:</h1>
    <p className="textHomePersonalize">
    Create your favorite starting eleven, create your MotoGP podium and create your powerlifting records. 
    Interact with other fans, like your favorites and share your achievements. 
    Our app not only follows events, but also connects passionate communities.

    Our space is perfect for connecting with people who share your enthusiasm.
    </p>
    <h1 className="titleEnterNow">Enter now:</h1>
    <p className="textHomeEnterNow">
    Live the emotion with every touch. Enter our app and be part of a community where passion meets technology. 
    Your personalized soccer, MotoGP and powerlifting experience awaits you!
    </p>
    </div>
    
    <div className="picturesHome">
    <figure className="dataHome">
      <Link to={user.interestedIn == 'fifa' ? '/fifa' : '/login'}>
      <img src="https://res.cloudinary.com/dqlvldxwc/image/upload/v1697625721/100_qbiwp6.png"/>
      </Link>
      <h3 className="titlePictureFifa">FIFA</h3>
    </figure>
    
    <figure className="dataHome">
      <Link to={isLogged ? "/motogp" : "/login"} onClick={handleClick}>
      <img src="https://res.cloudinary.com/dqlvldxwc/image/upload/v1697625721/100_qbiwp6.png"/>
      </Link>
      <h3 className="titlePictureMotoGP">MOTO GP</h3>
    </figure>

    <figure className="dataHome">
      <Link to={isLogged ? "/powerlifting" : "/login"} onClick={handleClick}>
      <img src="https://res.cloudinary.com/dqlvldxwc/image/upload/v1697625721/100_qbiwp6.png"/>
      </Link>
      <h3 className="titlePicturePowerLifting">POWER LIFTING</h3>
    </figure>
    </div>
    </div>
    </>
  )
}
