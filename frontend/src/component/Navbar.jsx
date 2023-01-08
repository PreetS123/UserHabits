import React from 'react'
import {NavLink} from 'react-router-dom';
import styles from '../Styles/Navbar.module.css';

export const Navbar = () => {
    
    const activeStyle={
        textDecoration: "none",
        fontSize: "30px",
        color:"white"
     }
     const unactiveStyle={
        textDecoration: "none",
        fontSize: "20px",
        color:"#33D1F4"
     }


  return (
    <div>
         <div className={styles.navcontainer}>
        <NavLink to='/home'
        style={({isActive})=>(isActive?activeStyle:unactiveStyle)}
        >TIF LABS</NavLink>
        <div>
            <div>
            <NavLink to='/'
        style={({isActive})=>(isActive?activeStyle:unactiveStyle)}
        >SignUp</NavLink>
        <NavLink to='/login'
        style={({isActive})=>(isActive?activeStyle:unactiveStyle)}
        >Login</NavLink>
            </div>
      
        </div>
    </div>
    </div>
  )
}
