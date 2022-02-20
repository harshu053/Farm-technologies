import React from 'react'

export default function Dripirrigation() {
  return (
  <>
  <div id='list-example' className="list-group ScrollStyle">

  <div className='page-header' >
       <h2 className='page-header1'>Drip irrigation system</h2>
  </div>

  <div className=" my-5 container">
      <p >Drip irrigation is today’s need because Water – nature’s gift to mankind is not unlimited and free forever. World water resources are fast diminishing. The one and only answer to this problem is Drip Irrigation Systems.</p>

      <p>Drip irrigation is a technique in which water flows through a filter into special drip pipes, with emitters located at different spacing. Water is distributed through the emitters directly into the soil near the roots through a special slow-release device. If the drip irrigation system is properly designed, installed, and managed, drip irrigation may help achieve water conservation by reducing evaporation and deep drainage. Compared to other types of irrigation systems such as flood or overhead sprinklers, water can be more precisely applied to the plant roots. In addition, drip can eliminate many diseases that are spread through irrigation water. Drip irrigation is adaptable to any farmable slope and is suitable for most soils. In contrary to commercial drip irrigation, simple self-made systems are cheap and effective.</p>
  </div>

<div className='my-5'>
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
        <div className="carousel-item active">
            <div className="d-flex justify-content-center">
                <img  src="./images/slide1.jpg" className="d-block w-50 "style={{height:'300px'}} alt="..."/>
            </div>
        </div>
        <div className="carousel-item">
            <div className="d-flex justify-content-center">
                <img   src="./images/slide2.jpg" className="d-block w-50" style={{height:'300px'}}alt="..."/>
            </div>
        </div>
        <div className="carousel-item">
            <div className="d-flex justify-content-center">
                <img  src="./images/slide3.jfif" className="d-block w-50" style={{height:'300px'}}alt="..."/>
            </div>
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
</div>
</div>

  <div className='setup'>
      <div className="container">
       <div className="row">
       <img style={{width:"70%"}} src="./images/setup-drip.png"  className=" my-5 img" alt="..."/>
       <div style={{width:"25%"}} className='component'>
          <h4>Components of the system:</h4>
          <p><i className="fas fa-check-square"></i> Drippers</p>
          <p><i className="fas fa-check-square"></i> Drip laterals</p>
          <p><i className="fas fa-check-square"></i> Flat drippers</p>
          <p><i className="fas fa-check-square"></i> Openable threaded drippers</p>
       </div>
       </div>
      </div>
  </div>

  <div>
    <div className="container">
       <div>
            <h4 className='  my-5  borderbottom'>1) Water Pump</h4>
             
            <p>A pump of a suitable capacity Water pump is used to supply water through the drip irrigation system components at a specific level of pressure.</p>

            <p>If the source of a water supply is a bore well, open well, or a Canal, there is the possibility of organic and inorganic foreign bodies in the water. In this case, use the suction filter to get relatively clean water.</p>

            <p>The electric motors or diesel engines are the common prime mover of the pump. Recently the solar pump is being used to popularize it for drip irrigation purposes.</p>
       </div>

       <div>
            <h4 className='  my-5  borderbottom'>2) Filter Unit</h4>
            <img style={{width:"30%"}} src="./images/head-unit.jpg"  className=" my-2 acces-img" alt="..."/>
            <p>There should be a good quality filter in the control head installation of a drip system. The filter uses to clean the suspended impurities of water supplied by the pump before it reaches to drippers. Impurities in irrigation water may cause blockage of the holes and passage of drippers.</p>
            <p>The success of drippers greatly depends on the performance of the filter.A filter unit cleans irrigation water impurities that are suspended and prevent blockage of holes. There is various type of filter available in the market.</p>
            <p>There are Three Types of filters: Hydrocyclone Filter, Media filter, and Screen or Disk filter.</p>
       </div>

       <div>
            <h4 className='  my-5  borderbottom'>A) Media (Sand/ Garval) Filters</h4>
            <img style={{width:"10%", height:'300px'}} src="./images/media-filter.jpg"  className=" my-2 acces-img" alt="..."/>
            <p>These filters come as the primary filter unit, and this is powerful against inorganic suspended solids, biological materials, and other organic substances.</p>
            <p>The filters are made up of a circular tank filled with layers of coarse sand and different gravel sizes with a provision of valves or flushing the filter assembly in case of clogging.</p>
            <p>A gravel filter or sand filter is vital for the open reservoir, even where algae growth occurs in the water source.</p>

       </div>

       <div>
            <h4 className='  my-5  borderbottom'>B) Hydrocyclone Filter</h4>
            <img  style={{width:"10%", height:'300px'}}src="./images/hydrocyclone-filter.jpg"  className=" my-2 acces-img" alt="..."/>
            <p>If the irrigation water contains more sand particles, hydro-cyclone type filters are removed this sand particle by creating centrifugal force and spins out sand from water.</p>
            <p>The Hydro-cyclones Filter generates a spinning activity causing the sand particles to separate the water and be trapped in a storage tank at the bottom of this device.</p>
            <p>Hydro-cyclone type filters are produced in various sizes for different discharge capacities.</p>
       </div>

       <div>
            <h4 className='  my-5  borderbottom'>C) Screen Filter:</h4>
            <img  style={{width:"10%", height:'300px'}} src="./images/screen-filter-1.jpg"  className=" my-2 acces-img" alt="..."/>
            <p>In general, the screen filter consists of a single or double perforated cylinder placed in a plastic or metallic container for removing the impurities.</p>
            <p>Generally, 100 to 200 mesh screens are used in this type of filter. It must be cleaned and inspected periodically for satisfactory operation of any drip system.</p>
            <p>Screen filer is installed with or without a gravel filter,  depend upon the quality of irrigation water. The screen filter is made up of non-corrosive plastic or metal substance.</p>
       </div>

       <div>
            <h4 className='  my-5  borderbottom'>C) Disc Filter:</h4>
            <img  style={{width:"10%", height:'150px'}} src="./images/plastic-disc-filte.jpg"  className=" my-2 acces-img" alt="..."/>
            <p>Disc filter comes as part of the secondary filter unit. Multiple circular discs filter water. it  is made up of high-quality plastic material</p>
 
       </div>

       <div>
            <h4 className='  my-5  borderbottom'>3) MainLine:</h4>
            
            <p>The mainline transfers the total amount of water for the irrigation system. It connects the different sub-mains to a water source. The main pipes are commonly made of flexible materials such as PVC (polyvinyl chloride) or plastics.</p>
            <p>The mainline pipe passes water from the filtration unit to the sub-main pipe. This pipe’s diameter depends upon drips irrigation system flow capacity, normally 2.5 – 4 Inch diameter PVC pipe used as main-line.</p>
            <p>Mainline & sub-main should be installed in a Telescopic manner; that is, the pipe with a larger diameter should be connected first, followed by pipes with a smaller diameter. This arrangement helps to maintain uniform pressure in the system.</p>
       </div>

       <div>
            <h4 className='  my-5  borderbottom'>4) Submain: </h4>
             
            <p>The sub-main feed to the laterals on one or both sides. It is made of either medium-density polyethylene (PE) or PVC. There should be a balance between the diameter of the main and sub-mains.</p>
            <p>These are determined in consideration of the rate of discharge, number of sub-mains, and friction losses in pipes</p>
   
       </div>

       <div>
            <h4 className='  my-5  borderbottom'>5) Laterals:</h4>
            <img style={{width:"20%", height:'150px'}} src="./images/drip-laterals1-1.jpg"  className=" my-2 acces-img" alt="..."/>
            <p>Laterals are made up of low-density polyethylene (LDP) or linear low-density polyethylene (LLDPE) material and are available in different sizes, 12 mm, 16mm, and 20 mm.</p>
            <p>Based on the availability of water, crop, and spacing, 12 millimeter 16-millimeter laterals install.</p>
       </div>

       <div>
            <h4 className='  my-5  borderbottom'>6) Drippers:</h4>
            
            <p>Drippers are also called emitters. The dripper is discharging water from the lateral pipe to the soil.</p>
            <p>Drippers are generally manufactured from polypropylene materials.</p>
            <p>Mainly, two types of drippers are available in the market. Online Dripper and  Inline Dripper</p>
       </div>


       <div>
            <h4 className='  my-5  borderbottom'>A) Online Dripper:</h4>
            <img style={{width:"10%", height:'150px'}} src="./images/online-dripper.jpg"  className=" my-2 acces-img" alt="..."/>
            <p>In this type of dripper, they are placed on the lateral, called an online dripper. these drippers are fixed on the lateral by punching suitable size holes in the pipe</p>
            <p>This type of dripper uses mostly for Orchard Crops like coconut, pomegranate, guava, etc., the capacity to discharge water available is 2L/hour, 4L/hour, and 8L /hour.</p>
       </div>

       <div>
            <h4 className='  my-5  borderbottom'>B)  Inline Dripper:</h4>
            <img  style={{width:"10%", height:'150px'}}src="./images/inline-dripper.jpg"  className=" my-2 acces-img" alt="..."/>
            <p>In this type, the dripper is placed inside the lateral pipe. The distance between the two drippers is the same. There are three types of available inline drippers.</p>
            <p>Non-Pressure Compensating Drippers (NPC): This is a very simple dripper, which does not maintain uniform pressure</p>
            <p>Pressure Compensating Drippers (PC): This dripper is more advanced; it maintains uniform pressure in all drippers. It mostly uses for the greenhouse crop, the price of this dripper is slightly high.</p>
            <p>Non-Draining Drippers: This dripper is mainly used in a soilless-like mediums like cocopits, Perlite, and Vermiculite.</p>
       </div>

       <div>
            <h4 className='  my-5  borderbottom'>7) Fertilizing Unit.</h4>
            <img  style={{width:"10%", height:'150px'}} src="./images/venturi.jpg"  className=" my-2 acces-img" alt="..."/>
            <p>The direct application of fertilizer through drip irrigation has increased the efficient use of fertilizer and saving in labour and money.</p>
            <p>With this fertilizing unit’s help, liquid fertilizer is provided to the plant through a drip irrigation system.</p>
            <p>Application of fertilizer into irrigation system is made by either a by-pass pressure tank or by venture pump or direct
            injection system.</p>
       </div>


       <div>
            <h4 className='  my-5  borderbottom'>8)Pressure Gauge:</h4>
            <img style={{width:"10%", height:'150px'}} src="./images/pressure.jpg"  className=" my-2 acces-img" alt="..."/>
            <p>It is used to determine water pressure in the drip irrigation system.</p>
       </div>


       <div>
            <h4 className='  my-5  borderbottom'>8) Controls Valves</h4>
            <img  style={{width:"10%", height:'150px'}}src="./images/ball-val.jpg"  className=" my-2 acces-img" alt="..."/>
            <p>This value is used to control water flow. They made up of plastic and iron material.</p>
       </div>


       <div>
            <h4 className='  my-5  borderbottom'>9) Flush Valve:</h4>
            <img style={{width:"10%", height:'150px'}} src="./images/flus.jpg"  className=" my-2 acces-img" alt="..."/>
            <p>The flush valve is placed at the end of the sub-Maine pipe it uses to flush out dirt.</p>
       </div>

       <div>
            <h4 className='  my-5  borderbottom'>10) Non-Return Valve</h4>
            <img  style={{width:"10%", height:'150px'}} src="./images/non-return.jpg"  className=" my-2 acces-img" alt="..."/>
            <p>Non -return valve is useful to stop return water toward the water pump.</p>
       </div>

       <div>
            <h4 className='  my-5  borderbottom'>11) Air Valve</h4>
            <img  style={{width:"10%", height:'150px'}} src="./images/air-valve.jpg"  className=" my-2 acces-img" alt="..."/>
            <p>It helps prevent the sucking of mud by the drippers and release air into the drip irrigation system.</p>
       </div>

       <div>
            <h4 className='  my-5  borderbottom'>12) Endcap</h4>
             
            <p>The end cap is used to close one end of the lateral pipe; they remove it at the cleaning time.</p>
       </div>

       <div>
            <h4 className='  my-5  '>Types Of Drip Irrigation System</h4>
             
            <p>Their many types are available in drip irrigation here. Only two popular types are explained.</p>
       </div>

       <div>
            <h4 className='  my-5  borderbottom'>1) Surface Drip System</h4>
             
            <p>In the surface drip system, the emitter and lateral pipe are placed on the soil surface. This is the most common and popular type of drip system.</p>
            <p>It is suitable for wide-spaced plants as well as for row crops. It is easy to use a surface drip to observe and inspect, change, clean the emitters, observe surface moisture patterns, and measure individual emitter discharge rates.</p>
       </div>

       <div>
            <h4 className='  my-5  borderbottom'>2) Sub-Surface Drip System</h4>
             
            <p>in a subsurface drip irrigation system, the lateral is placed below the ground and near the plant root zone area. In this system, water is slowly applied below the surface through the emitters.</p>
            <p>Sub-surface drip systems have gained wider acceptance due to removing earlier problems of clogging to a large extent.</p>
            <p>Due to the sub-surface drip method, there is less intervention in agriculture or any cultural practices and possibly more operational life.</p>
            <p>Sub-surface drip system provides little interference with cultivation or any cultural practices and possibly longer operational life.</p>
       </div>
 
       
       
    </div>
  </div>
























  </div>
  </>
  )
}
