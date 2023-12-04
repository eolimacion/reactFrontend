
import { animated, useSpring } from 'react-spring';
import './Section.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

const Section = ({ title, content, isVisible }) => {
  const {user} = useAuth();
  const fadeIn = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
  });

  return (
    <animated.div style={fadeIn} className="section">
      <h1 className="sectionTitle">{title}</h1>
      <p>{content}</p>
      {title == 'Jump straight to the action!' &&  <div className="picturesHome">
    <figure className="dataHome">
      <Link to={user ? '/fifa' : '/login'}>
      <img className="pppp" src="https://res.cloudinary.com/dqlvldxwc/image/upload/v1701336642/fifa_PNG31_lociqj_oijqak.png"/>
      </Link>
      <h3 className="titlePictureFifa">FIFA</h3>
    </figure>
    
    <figure className="dataHome">
      <Link to={user ? '/motogp' : '/login'}>
      <img className="pppp" src="https://res.cloudinary.com/dqlvldxwc/image/upload/v1701337001/630617_i6cgxo_d2kuc3.png"/>
      </Link>
      <h3 className="titlePictureMotoGP">MOTO GP</h3>
    </figure>

    <figure className="dataHome">
      <Link to={user ? '/powerlifting' : '/login'}>
      <img className="pppp" src="https://res.cloudinary.com/drbssyzr7/image/upload/v1701649855/dataBase/powerlifting_lbmow4.png"/>
      </Link>
      <h3 className="titlePicturePowerLifting">POWER LIFTING</h3>
    </figure>
    </div>}
    </animated.div>
  );
};

export default Section;
