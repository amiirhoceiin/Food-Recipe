
import './App.css';
import React from 'react'
import Header from './components/components/Header'
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Add from './pages/Add';
import Card from './pages/Card';
import Recipes from './pages/Recipes';
import Search from './pages/Search';
import Page404 from './pages/Page404';
import { useTheme } from './hooks/useTheme';

function App() {
   const {mode} = useTheme();
  return (
    <div className='bg-slate-200' style={{minHeight:'100vh'}}>
      
      <BrowserRouter>
       <Header/>
       <Routes>
        <Route path='/' element={<Card/>}/>
        <Route path = '/add' element={<Add/>}/>
        <Route path = '/recipes/:id' element={<Recipes/>}/> 
        <Route path='/search' element={<Search/>} />
        <Route path='*' element={<Page404/>}/>
        
       </Routes> 
     </BrowserRouter>
     

    </div>
  );
}

export default App;
