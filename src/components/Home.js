import React from 'react';
 
 

export default function Home() {
  return(
  <>
  <div id='list-example' className="list-group ScrollStyle"> 
    <div className='home'>
      <div className=''>
  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="d-flex justify-content-center">
      <img src="./images/homec1.jpg" className=" filter d-block w-100" style={{height:'500px'}}alt="..."/>
      </div>
      <div className="carousel-caption ">
        <h5>Find help in agriculture...</h5>
         
      </div>
    </div>
    <div className="carousel-item">
    <div className="d-flex justify-content-center">
      <img src="./images/homec2.jpg" className=" filter d-block w-100" style={{height:'500px'}}alt="..."/>
      </div>
      <div className="carousel-caption ">
        <h5>Find help in agriculture...</h5>
         
      </div>
    </div>
    <div className="carousel-item">
    <div className="d-flex justify-content-center">
      <img src="./images/homec3.jpg" className=" filter d-block w-100" style={{height:'500px'}}alt="..."/>
      </div>
      <div className="carousel-caption">
        <h5 className='caption'>Find help in agriculture...</h5>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div>
      </div>
    </div>

    <div className='detail'>
    <div className=''>
      <h4 className='detail1'>This web application contain detail about:</h4>
    </div>

    <div className='mt-5 detail2'> 
      <div className="container">
        <div className="row">
          <div className=" col">
          <div className="card detail3-1 " >
            <div className="row g-0">
              <div className="col-md-4">
                <img src="./images/cropc1.jpg" className="rounded-circle z-depth-2 imgsec rounded-start" alt="..."/>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className=" detail3-1-1   card-title">Cropdetail</h5>
                  <h6 className=" detail3-1-2">In this component you will know about crop protection,diseases affecting crops ,their harvesting and water requirement</h6>
                  
                </div>
              </div>
            </div>
          </div>
         </div>
          <div className=" col">
          <div className="card detail3-1 " >
            <div className="row g-0">
              <div className="col-md-4">
                <img src="./images/drip-laterals1-1.jpg" className="rounded-circle z-depth-2 imgsec rounded-start" alt="..."/>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className=" detail3-1-1   card-title">Drip-irrigation</h5>
                  <h6 className=" detail3-1-2">In this component you will know about drip irrigation system and their component.</h6>
                  
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className=" col">
          <div className="card detail3-1 " >
            <div className="row g-0">
              <div className="col-md-4">
                <img src="./images/gp.jpg" className="rounded-circle z-depth-2 imgsec rounded-start" alt="..."/>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className=" detail3-1-1   card-title">Polyhouse</h5>
                  <h6 className=" detail3-1-2">In this component you will know about Hi-tech farming  like polyhouse and grrenhouse,crops suitable for polyhouse/greenhouse etc...</h6>
                  
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    <div className=' contact '>
      <div className='contact-1'>
        <h4>Contact us</h4>
      </div>



      <div className="container">
        <div className="row">
          <div  className="col">
           <div style={{width:'100%'}}  className="mb-3">
               
              <label for="exampleFormControlTextarea1" className=" text-light form-label">*Tells us your problem related to farming/agriculture technology.</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write here.."></textarea>
              <label for="exampleFormControlInput1" className="text-light form-label">Your Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
              <button type='button' className=' my-1 btn btn-primary'>Submit</button>
           </div>
          </div>
          <div className="col">
             <div className='my-5 text-center' style={{width:'100%'}}>
               <p className='text-light'>Email us your query on</p>
               <p className='text-light'> name@gmail.com</p> 

               <p className='text-light'>Contact us on</p>
               <p className='text-light'> +91 **********</p> 


             </div>
           </div>
        </div>
      </div>


    </div>

    










  </div>
   
 
  </>
  )
}