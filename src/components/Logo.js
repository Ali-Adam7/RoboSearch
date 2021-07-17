import React from 'react'
import logo from './logo.svg'
const Logo = ({side}) => {
 
return (
    
       <img src =  {logo} className = {"App-logo" + " " + side} ></img>
)
}
export default Logo