import React from 'react';
import { Link } from 'react-router-dom';


function Universe() {
    return ( 
        <div className='container mt-5'>
            <div className='row text-center '>
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
               
             

                <div className="row text-center  g-3">
                <div className='col-4 mt-5'>
                    <img src= "media/images/smallcaseLogo.png"  alt="smallcase"/>
                    <p className="text-small text-muted">Thematic investment platform</p>
                    </div>

                     <div className='col-4 mt-5'>
                     <img src= "media/images/streakLogo.png"  alt="streak"   style={{ height: "50px", width: "auto" }} />
                    <p className="text-small text-muted">Algo & strategy platform </p>
                    </div>
                    
                     <div className='col-4 mt-5'>
                     <img src= "media/images/sensibullLogo.svg"  alt="sensibull" style={{ height: "40px", objectFit: "contain" }}/>
                    <p className="text-small text-muted">Options Trading platform</p>
                    </div>
                    </div>
                    <div className="row text-center g-3">
                <div className='col-4 mt-5 '>
                    <img src= "media/images/zerodhaFundhouse.png"  alt="ZerodhaFundhouse"  style={{ height: "60px", objectFit: "contain" }}/>
                    <p className="text-small text-muted">Asset management</p>
                    </div>

                     <div className='col-4 mt-5'>
                     <img src= "media/images/goldenpiLogo.png"  alt="goldenpi"  style={{ height: "60px", objectFit: "contain" }}/>
                    <p className="text-small text-muted">Bonds trading platform</p>
                    </div>
                    
                     <div className='col-4 mt-5'>
                     <img src= "media/images/dittoLogo.png"  alt="ditto"  style={{ height: "60px", objectFit: "contain" }}/>
                    <p className="text-small text-muted">Insurance</p>
                    </div>
                    <Link to="/signup" className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%" , margin:"auto"}}>Signup Now</Link>
                    
                    </div>

                    
                    
                    
            </div>
        </div>
        
     );
}

export default Universe;