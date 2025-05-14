import Recipes from "./subcomponents/Recipes"
import HeroSection from "./subcomponents/HeroSection"

function Home({recipes}) {

  return (
    <>
    <HeroSection/>
    <Recipes recipes={recipes}/>
    </>
  )
}

export default Home
