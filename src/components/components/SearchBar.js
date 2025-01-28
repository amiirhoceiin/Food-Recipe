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
    <form onSubmit={handleSearch}>
        <input style={{borderRadius : '20px',border : 'none' ,paddingLeft :'10px'}} type="text" value={term} placeholder='Search' onChange={(e)=>setTerm(e.target.value)} required/>
    </form>
  )
}
