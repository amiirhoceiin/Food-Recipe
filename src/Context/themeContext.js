import { createContext, useReducer} from "react";

export const themeContext = createContext();

const themeReducer =(state,action)=>{
  switch(action.type){
    case 'CHANGE-COLOR' : 
    return {...state,color : action.payload}
    case 'CHANGE-MODE':
      return {...state,mode : action.payload}
    default :{
     return state
    } 
  } 
}
export function ThemeProvider ({children}){
  

 const [state,distpatch]  = useReducer(themeReducer,{
  color : 'rgb(149, 90, 204)',
  mode : 'light'
 })

 const changeColor = (color)=>{
  distpatch({type :'CHANGE-COLOR',payload: color})
 }
const changeMode = (mode)=>{
  distpatch({type : 'CHANGE-MODE' , payload : mode})
}
  return (
    <themeContext.Provider value={{...state,changeColor,changeMode}}>
    {children}
  </themeContext.Provider>
  )

}