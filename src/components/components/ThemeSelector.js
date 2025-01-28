import React from 'react'
import { useTheme } from '../../hooks/useTheme'
import './ThemeSelector.css' 

export default function ThemeSelector() {
    const {mode,changeColor,changeMode} = useTheme();
   
    
  return (
    <div>
        <div className="colorDiv">
        <div className="container colorBox d-flex justify-content-end align-items-center">
             <button className='btn btn-danger m-1 btnstyle' onClick={()=>changeColor('red')}></button>
             <button className='btn btn-primary m-1 btnstyle' onClick={()=>changeColor('blue')}></button>
             <button className='btn m-1  btnpurple btnstyle' onClick={()=>changeColor('rgb(149, 90, 204)')}></button>
        </div>
        <div className='imagemode  col-1 d-flex justify-content-center'>
                <img  width="64" height="64" src="https://img.icons8.com/external-outline-berkahicon/64/external-dark-mix-ui-social-media-outline-berkahicon.png" alt="external-dark-mix-ui-social-media-outline-berkahicon" onClick={()=>changeMode(mode==='dark' ? 'light' :'dark')}/>
             </div>
      </div>
      
      <div>
      </div>
    </div>
  )
}
