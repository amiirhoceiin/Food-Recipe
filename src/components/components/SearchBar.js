import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchBar() {
    const [term,setTerm] = useState('')
    const navigate = useNavigate();
    const handleSearch = (event)=>{
     event.preventDefault(); 
     navigate(`/search?q=${term}`)
    }
  return (
    <form onSubmit={handleSearch} className=' text-center w-44 md:w-96 md:flex'>
        <input className=' rounded-md w-32 md:w-80 p-1' type="text" value={term} placeholder='Search' onChange={(e)=>setTerm(e.target.value)} required/>
    </form>
  )
}
