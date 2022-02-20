 import React, { Component } from 'react';
 
 export default class Cropdetail extends Component {
 
   render() {
    let{tittle,condition,dis,water,harvesting}=this.props;
     return(
     <>
     <h3 className=' my-5 head'>{tittle} Cultivation Guide: Start a {tittle} Plantation and Grow {tittle} </h3> 
      <div className="my-3 accordion" id="accordionExample">
          <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <strong>Ideal Conditions</strong>
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <p>{condition}</p>
          </div>
        </div>
     
    
    
          </div>
          <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <strong>Disease Protection</strong>
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body">
           <p>{dis}</p>
          </div>
        </div>
          </div>
          <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
           <strong>Water Requirement</strong>
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          <p>{water}</p>
          </div>
        </div>
          </div>
      </div>
      <div className=" my-5 card text-dark bg-light mb-3"  >
          <div className="card-header"><strong>Harvesting from Plantation</strong></div>
          <div className="card-body">
            <p className="card-text">{harvesting}</p>
          </div>
      </div>
     </>
     )
   }
 }
 