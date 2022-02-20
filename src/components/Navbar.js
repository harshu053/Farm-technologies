import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
 
 

export default function Navbar(props){

   const boolfun=(value)=>{
      value=false;
      console.log(value);
   }
    return (
    <>
    <nav className={`navbar navbar-expand-lg  navbar-dark bg-dark  shadow-5-strong`}>
       <a className="  title navbar-brand mx-3" href="/">{props.tittle}</a>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
       <span className=" navbar-toggler-icon"></span></button>
       <div className="collapse navclass navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
               <li className="navclass nav-item active">
                  <Link className="  nav-link "   to={'/home'}><span><i className=" far fa-home"></i></span> Home</Link>
               </li>
                
               <li className="navclass nav-item active">
                  <Link className="  nav-link " onClick={boolfun(props.boolean)}to={'/cropdetail'}>Cropdetails</Link>
               </li>
               <li className="navclass nav-item active">
                  <Link className="  nav-link " onClick={boolfun(props.boolean)}to={'/polyhouse'}>Polyhouse/Greenhose</Link>
               </li>
               <li className="navclass nav-item active">
                  <Link className="  nav-link " onClick={boolfun(props.boolean)} to={'/drip'}>Drip irrigation</Link>
               </li>
               <li className="navclass nav-item active">
                  <Link className="  nav-link " onClick={boolfun(props.boolean)} to={'/about'}>About us</Link>
               </li>

                
           </ul>
       </div>  
 
    </nav>




     
    </>
    )
}
