import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import { useState,useEffect } from 'react';

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
    <div className='  flex justify-center mt-20 '>
        {isLoading && <p>loading ....</p>}
        {error && <p>{error}</p>}
       <div className='container  grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4 p-2 '>
       {cards && cards.map(card=>(
            <div key={card.id} className=' rounded-md flex bg-slate-300 hover:bg-slate-200' >
              <div className='flex flex-col justify-between h-80 ' style={{width:'100%'}}>
                <h1 className='text-center text-2xl m-2'>{card.title}</h1>
                 <p className='text-center p-2'>{card.cookingTime} to make</p> 
                 <p className='px-2 text-center '>{card.method.slice(0,100)}...</p> 
                 <ul className='text-left p-2'>{card.ingredients.slice(0,3).map(ing=><li key={ing}>{ing}</li>)}...</ul>
                 <Link to={`/recipes/${card.id}`}  className='bg-orange-500 rounded p-1 m-2 hover:bg-orange-400'>Cooking</Link>
                </div>
              </div>
        ))}
       </div>
       
    </div>
  )
}
