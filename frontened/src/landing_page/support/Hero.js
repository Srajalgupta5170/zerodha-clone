import React from 'react';


function Hero() {
    return (      <section className="container-fluid" id='supportHero'>
    <div className=" p-5" id='supportWrapper'>
      <h4>
        Support Portal
      </h4>
      <a href=''>Track Tickets</a>
    </div>

     <div className="row p-5 mb-3 mt-3" >
        <div className="col-6 p-5   " >
            <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
            <input placeholder='Eg. How do I activate F&0'/><br/>
            <a href=''>Track account opening</a>
            <a href=''>Track segment verification </a>
            <a href=''>Intraday margins</a>
            <a href=''>Kite user manual</a>
        </div>
        <div className="col-6 p-5 " >
             <h1 className='fs-3'>Featured</h1>
             <ol>
                <li> <a href=''>1. Current Takeovers and delisting-January 2024</a></li>
                 <li><a href=''>2. Latest Intraday leverages- MIS & CO </a></li>
             </ol>
            
            
        </div>
      
    </div>
  </section>
);
}

export default Hero;