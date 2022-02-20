import React from 'react';

export default function CropName(props) {

    const onTrigger=(x)=>{
      props.parentCallback(x);
    }

  return(
    <>
    <div className=' mx-2 my-2'>
            <div className={`card`} >
                <img  src={props.img}  className="card-img-top" alt="..."/>
                <div className="card-body">
                   <p className="card-text">{props.desc} about {props.title}</p>
 
                   <button  onClick={() =>onTrigger(props.value)} href="/" className=" mr-5 btn btn-success card-title"> {props.title} </button>
                </div>
            </div>
        </div>
    </>
  )
}

 

 

