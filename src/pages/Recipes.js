
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';


export default function Recipes() {
    const {id} = useParams()
    const url = 'http://localhost:3000/recipes/'+id;
    const {data : cards,isLoading,error} = useFetch(url);
    console.log(cards);
     
    
  return (
    <div className=' '>
       {isLoading && <p>loading ....</p>}
        {error && <p>{error}</p>}
       <div className=''>
       {cards && (
    <div className=''>  
    <div className=''>
        <h1 className=''>{cards.title}</h1>
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
