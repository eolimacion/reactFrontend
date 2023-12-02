import './Footer.css'
import { Link, useNavigate } from "react-router-dom";

export const Footer = () => {
  return (<>
  <footer>
    <div className='footerDiv'>
    <div className='firstColumnFooter'>
          <h3 className='h3Footer'>BRAND</h3>
          <ul>
          <li>Investors</li>
          <li>Careers</li>
          <li>Owners</li>
          <li>Statistics</li>
          <li>Stack</li>
          </ul>

    </div>
    <div className='secondColumnFooter'>
    <h3 className='h3Footer'>ABOUT US</h3>
          <ul>
          <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}><li id='liLinkFooter'>Our Story</li></Link>
          <li>Blog</li>
          <li>FAQs</li>
          <li></li>
          </ul>

    </div>
    <div className='thirdColumnFooter'>
    <h3 className='h3Footer'>POPULAR</h3>
          <ul>
          <Link to="/podium" style={{ textDecoration: 'none', color: 'white' }}><li id='liLinkFooter'>Podium</li></Link>
          <Link to="/eleven" style={{ textDecoration: 'none', color: 'white' }}> <li id='liLinkFooter'>Eleven</li></Link>
          <Link to="/motogp/circuits" style={{ textDecoration: 'none', color: 'white' }}> <li id='liLinkFooter'>Circuits</li></Link>
          <Link to="/powerlifting/lifters" style={{ textDecoration: 'none', color: 'white' }}><li id='liLinkFooter'>Lifter</li></Link>
          </ul>
    </div>
    <div className='fourthColumnFooter'>
    <h3 className='h3Footer'>CONTACT</h3>
          <ul>
          <li id='liLinkFooter'>Linkedin</li>
          <li>Gmail</li>
          <li>Twitter</li>
          <li>Instagram</li>
          </ul>
    </div>

    </div>
    <div className='legalDivFooter'>
    <h3 className='h3Footer'>TERMS OF USE</h3>
    <h3 className='h3Footer'>PRIVACY POLICY</h3>
    </div>
  </footer>
  </>
  )
}
