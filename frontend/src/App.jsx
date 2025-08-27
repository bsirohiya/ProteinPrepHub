import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import RecipesPage from "./pages/RecipesPage";
import TipsPage from "./pages/TipsPage";
import ContactUsPage from "./pages/ContactUsPage";
import ShareRecipePage from "./pages/ShareRecipePage";
import RecipeDetails from "./components/RecipeDetails"
import data from "./recipes.json"
import './App.css'
import BMICalculator from './components/BMICalculator.jsx'

function App() {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data)
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<>
          <Home recipes={recipes} />
          <BMICalculator />
        </>} />
        <Route path='/' element={<Home recipes={recipes} />} />
        <Route path='/about' element={<About />} />
        <Route path='/recipe/:id' element={<RecipeDetails recipes={recipes} />} />
        <Route path="/recipes" element={<RecipesPage recipes={recipes} />} />
        <Route path="/tips" element={<TipsPage />} />
        <Route path="/share" element={<ShareRecipePage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
