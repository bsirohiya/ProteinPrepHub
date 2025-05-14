import { Link } from "react-router-dom"

function HeroSection({ recipes }) {

  return (
    <>
      <article className="hero">
        <Link to={`/recipe/${17}`}>
          <section>
            <h4>Trending Now</h4>
            <h2>Yashas's famous salad with cheese</h2>
            <p>By Yashas Sharma</p>
          </section>
        </Link>
      </article>
    </>
  )
}

export default HeroSection


