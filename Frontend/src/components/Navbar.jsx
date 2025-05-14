import { Link } from "react-router-dom"

function Navbar() {

  return (
    <>
      <nav>
        <Link to={"/"}><img src="/logo.jpg" alt="logo" /></Link>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
