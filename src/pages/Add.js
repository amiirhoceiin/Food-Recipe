import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './add.css'
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
      <div className=' Addpage '>
      <form onSubmit={handleSubmit} className='Formpage ' >  

      <input type="text" value={title} placeholder='settitle' onChange={handleTitle} required className='form-control'/>

      <input type="text" value={cookingTime} placeholder='setCookingTime' onChange={handleCookingTime} required className='form-control'/>

      <textarea  value={method}  className='form-control' placeholder='setMethod' onChange={handleMethod} required/>

       <div className='ingredients'>
       <input type="text" className='form-control' value={newIngredients}  placeholder='setingredients' onChange={(e)=>{setNewIngredients(e.target.value)}}/>
       <button onClick={handleIngredients} className='btn btn-light btningredients'>new</button>
       </div>


       <button type='submit' className='btn btn-light' >Add</button>    
      
      </form>

      <button onClick={()=>navigate('/')} className='btn btn-light'>Home page</button>

    </div>


  )
}
