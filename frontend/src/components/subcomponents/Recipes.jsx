import { Link } from "react-router-dom"

function Recipes({recipes}) {
  const options=[
    { name: "Recipes and Menus", path: "/recipes" },
    { name: "Cooking Tips and Tricks", path: "/tips" },
    { name: "Share Your Recipes", path: "/share" },
    { name: "Contact Us", path: "/contact" },
  ]

  return (
    <>
    <article className="recipes">
      <section>
        {options.map((element) => (
            <Link key={element.name} to={element.path}>
              <button>{element.name}</button>
            </Link>
          ))}
      </section>

      <section className="container">
        {
          recipes.slice(0,8).map((element, index)=>{
            return(
              <Card key={index} element={element}/>
            )
          })
        }
      </section>

      <h3>Recommended Recipes</h3>

      <section className="container">
        {
          recipes.slice(8,16).map((element, index)=>{
            return(
              <Card key={index} element={element}/>
            )
          })
        }
      </section>


    </article>
    </>
  )
}


export default Recipes

function Card({element}){
  return(
    <Link className="card" to={`/recipe/${element.id}`} >
      <img src={element.image} alt={element.title} />
      <h4>{element.title}</h4>
      <h4>{element.cookingTime}</h4>
    </Link>
  )
}