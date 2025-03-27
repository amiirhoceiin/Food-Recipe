import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useTheme } from '../../hooks/useTheme';


export default function Header() {
  const navigate = useNavigate();

  const {color} = useTheme()
  const handleClick = () => {
    navigate('/add');
  };

   
  return (
    
    <div className='bg-blue-900 flex flex-col items-center ' style={{width:'100%'}}>
              <div className=" flex justify-between  p-3" style={{width:'100%',maxWidth:'1200px'}}>
          <h1 className="text-xl font-normal md:text-3xl text-orange-600 md:font-bold " onClick={() => navigate('/')}>
            Food Recipe
          </h1>
          <SearchBar/>
          <div className=" flex justify-between">
            
              
              <button
                type="button"
                className={`bg-orange-600 rounded-md p-1 hover:bg-orange-500`} 
                onClick={handleClick}
              >
                create recipe
              </button>
    
          </div>
          
        </div>
    </div>
  );
}
