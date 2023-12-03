import { useState } from 'react';
import { Loading, NavAbout } from '../../components'
import './About.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


export const About = () => {
  const [about, setAbout] = useState("mission");

  return (
    <>
<div id='mainAbout'>

  <div className='cardAbout'>
    <div className='buttonsAbout'>
    <NavAbout setAbout={setAbout}/>
    </div>
    <div className='outletAbout'>
  
        <div className='secondAbout'>
{ about == 'mission' && <p className='pAbout'>Facilitating access to the excitement of sports, allowing users to create, share and celebrate their favorite moments in Soccer, MotoGP and Powerlifting.</p>}
        { about == "commitment" && <p className='pAbout'>We value the connection between fans. <p> Our platform is not only a space to follow sporting events, but also to build strong communities where passion is shared and celebrated.</p></p>}
        { about == "discover" && <p className='pAbout'>Explore the diversity of our app and join us on this exciting journey. 
        <p><Link style={{ textDecoration: 'none', color: 'black' }}>Become part of our sports community!</Link></p></p>}
        </div>
    </div>


  </div>

  <div className='secondCardAbout'>
<img alt='cristiano y messi ia'  className='iaImage'src='https://res.cloudinary.com/daxddugwt/image/upload/v1701642330/Untitled_Artwork_27_vwtapd.png'/>
  {/* <div className='firstAbout'>
      <p className='pAboutfirst'>We are a passionate team that has created this app to unite Soccer, MotoGP and Powerlifting lovers in one place. 
        We strive to offer a unique and personalized experience for each user.</p>
        </div> */}

  </div>




</div>



      {/* <div className="divAbout">
      <h1 className="titleAbout">ABOUT US: </h1>
        <p className="textAbout1">
        We are a passionate team that has created this app to unite Soccer, MotoGP and Powerlifting lovers in one place. 
        We strive to offer a unique and personalized experience for each user.
        </p>
        <h3 className="titleMision">Mission: </h3>
        <p className="textMision">
        Facilitating access to the excitement of sports, allowing users to create, share and celebrate their favorite moments in Soccer, MotoGP and Powerlifting.
        </p>
        <h3 className="titleComunity">Commitment to the Community:</h3>
        <p className="textComunity">We value the connection between fans. Our platform is not only a space to follow sporting events, but also to build strong communities where passion is shared and celebrated.</p>
        <h3 className="titleTransparency">Transparency and Authenticity:</h3>
        <p className="textTransparency">
        We believe in transparency and authenticity in every interaction. 
        We work tirelessly to deliver an application that reflects our dedication to sports and user satisfaction.
        </p>
        <h3 className="titleDiscover">Find out more:</h3>
        <p className="textDiscover">
        Explore the diversity of our app and join us on this exciting journey. 
        Become part of our sports community today!
        </p>
      </div> */}
    </>
  )
}
