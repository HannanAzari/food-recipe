import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Recipe from './components/Recipe';

function App() {

  const [ recipe, setResipe ] = useState([]);
  const [ search, setSearch ] = useState('');
  const [ query, setQuery ] = useState('chicken');
  
  useEffect(()=> {
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const options = {
      method: 'GET',
      headers: {
       'X-RapidAPI-Key': '5ab4434717msh03ab7ccc4094f13p120126jsn600ac9d9ba6e',
		      'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
      }
    };
    
    const response = await fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=${query}`, options)
    const data = await response.json()
    console.log(data.hits)
      
    setResipe(data.hits);
      
  }
  return (
    <div className="App">
     <Navbar search={search} setSearch={setSearch} setQuery={setQuery}/>
     <div className='recipe'>
      {recipe.map(res => (
        <Recipe 
          key={res.recipe.calories}
          title={res.recipe.label}
          recipe={res.recipe.label}
          image={res.recipe.image}
          description={res.recipe.ingredientLines}
        />
      ))}
     </div>
    </div>
  );
}

export default App;
