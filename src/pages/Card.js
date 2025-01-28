import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import { useState,useEffect } from 'react';
import '../components/components/Header'
import './Card.css' 

// import Header from '../components/components/Header';

export default function Card() {

  const url = 'http://localhost:3000/recipes/';
  const {data : card,isLoading,error} = useFetch(url);
  const [cards,setCards] = useState(card); 
    
 

  useEffect(()=>{ 
    if(card){
      setCards(card);
    }
  },[card])

  return (
    <div className='container-fluid'>
        {isLoading && <p>loading ....</p>}
        {error && <p>{error}</p>}
       <div className='d-flex justify-content-center align-items-stretch row allcards '>
       {cards && cards.map(card=>(
            <div key={card.id} className='card col-3 shadow-lg d-flex justify-content-center align-items-center m-4' style={{height : 'auto'}}>
              <div className='card-body cardbody'>
                <h1 className='card-title'>{card.title}</h1>
                 <p>{card.cookingTime} to make</p> 
                 <p className='card-text'>{card.method.slice(0,100)}...</p> 
                 <ul>{card.ingredients.slice(0,3).map(ing=><li key={ing}>{ing}</li>)}...</ul>
                 <Link to={`/recipes/${card.id}`} id='linkrecipe'>Cooking</Link>
                </div>
              </div>
        ))}
       </div>
       
    </div>
  )
}
