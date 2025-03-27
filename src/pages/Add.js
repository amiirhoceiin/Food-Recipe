import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';



export default function Add() {
  const[title,setTitle] = useState('');
  const[cookingTime,setCookingTime] = useState('');
  const[method,setMethod] = useState('');
  const[newIngredients,setNewIngredients] = useState('');
  const[ingredients,setIngredients] = useState([]);
  const handleTitle =(e)=>{
      setTitle(e.target.value)
}


  const handleCookingTime = (e)=>{
    setCookingTime(e.target.value)
  }


  const handleMethod = (e)=>{
    setMethod(e.target.value)
  }


  const handleIngredients = (e)=>{
    e.preventDefault()
    if(newIngredients && !(ingredients.includes(newIngredients))){
      setIngredients(prevIngredients=>[...prevIngredients,newIngredients])
    }
    setNewIngredients('')
  }
  const {data,} = useFetch('http://localhost:3000/recipes');
  const navigate = useNavigate();
  
  
  const uniqIdFunc = (idExists)=>{
    let uniqId 
    do{
      uniqId = Math.floor(Math.random()*100)+4
    }while(idExists.includes(uniqId))
      return uniqId
  }
  

 const handleSubmit = (e)=>{
   e.preventDefault()
   const idExists = data.map((dat)=> dat.id);
   
   const uniqId = uniqIdFunc(idExists).toString()
   
   const newRecipe = {
    id:uniqId,
    title,
    ingredients, 
    method,
    cookingTime
  }
  fetch('http://localhost:3000/recipes',{
    method : "POST",
    headers : {
      "Content-Type": "application/json",
    },
    body : JSON.stringify(newRecipe)
  }).then((res)=>{
   if(!res.ok){
    throw new Error('Failed to save recipe')
   }
   return res.json();
  }).then((data)=>{
   console.log(data);
   setCookingTime('');
   setIngredients([]);
   setNewIngredients('');
   setMethod('');
   setTitle('');
  }).catch((error)=>{
    console.error("Error:",error);
  })
 }
 

  return (
      
      <div className=' flex flex-col items-center ' style={{width:'100%'}}>
      <form onSubmit={handleSubmit} className=' rounded-lg mt-20 flex flex-col justify-between items-center bg-slate-300  p-4' style={{height:'500px',width:'400px'}}>  

      <input type="text" value={title} placeholder='settitle' onChange={handleTitle} required className='p-1 rounded-md'/>

      <input type="text" value={cookingTime} placeholder='setCookingTime' onChange={handleCookingTime} required className='p-1  rounded-md'/>

      <textarea  value={method}  className='p-1  rounded-md' placeholder='setMethod' onChange={handleMethod} required/>

       <div className='flex flex-col'>
       <input type="text" className='p-1  rounded-md' value={newIngredients}  placeholder='setingredients' onChange={(e)=>{setNewIngredients(e.target.value)}}/>
       <button onClick={handleIngredients} className=''>new</button>
       </div>


       <button type='submit' className='bg-orange-500 text-blue-900 w-32 rounded-md' >Add</button>    
      
      </form>

      <button onClick={()=>navigate('/')} className=''>Home page</button>

    </div>


  )
}
