
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import './recipes.css'

export default function Recipes() {
    const {id} = useParams()
    const url = 'http://localhost:3000/recipes/'+id;
    const {data : cards,isLoading,error} = useFetch(url);
    console.log(cards);
     
    
  return (
    <div className='container-fluid '>
       {isLoading && <p>loading ....</p>}
        {error && <p>{error}</p>}
       <div className='d-flex  justify-content-center align-items-center row allcards'>
       {cards && (
    <div className='card col-6 cardRecipe shadow-lg'>  
    <div className='card-body m-2'>
        <h1 className='card-title'>{cards.title}</h1>
        <p>{cards.cookingTime}</p>
        <ul>{cards.ingredients.map(ing => <li key={ing}>{ing}</li>)}</ul>
        <p>{cards.method}</p>
    </div>

    </div>
)}

       </div>
    </div>
  )
}
