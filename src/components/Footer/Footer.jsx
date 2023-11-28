import './Footer.css'
import { Link } from "react-router-dom";

export const Footer = () => {
  return (<>
  <footer>
    <Link to="/about"><h4 className="linkAboutFooter">ABOUT US</h4></Link>
  </footer>
  </>
  )
}
