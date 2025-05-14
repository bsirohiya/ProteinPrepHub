import {Link} from "react-router-dom"
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa6";


function Footer() {

  return (
    <>
      <footer>
        <Link to={"https://www.instagram.com/bhaviksirohiya?igsh=MTFkNnFmZHQwZzJnMQ=="}><FaInstagram/></Link>
        <Link to={"https://www.facebook.com/profile.php?id=61573141597420"}><FaFacebook/></Link>
        <Link to={"https://www.linkedin.com/in/bhaviksirohiya"}><FaLinkedin/></Link>
      </footer>
    </>
  )
}

export default Footer