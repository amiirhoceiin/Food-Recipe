import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useTheme } from '../../hooks/useTheme';
import ThemeSelector from './ThemeSelector';


export default function Header() {
  const navigate = useNavigate();

  const {color} = useTheme()
  const handleClick = () => {
    navigate('/add');
  };

   
  return (
    <div>
      <nav className="nav navClas" style={{ backgroundColor: color }}>
        <div className="container-fluid d-flex align-items-center header2 ">
          <h1 className="navbar-brand foodRecipeLogo" onClick={() => navigate('/')}>
            Food Recipe
          </h1>
          <div className="d-flex justify-content-center align-items-center ms-auto">
            <SearchBar/>
              
              <button
                type="button"
                className={` btn btn-primary btnCreate`} 
                onClick={handleClick}
              >
                create recipe
              </button>
    
          </div>
        </div>
          
      </nav>
      <ThemeSelector/>
    </div>
  );
}
