import React from 'react';

function Awards() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6 mt-5 p-5'>
                    <img src='/media/Images/largestBroker.svg' alt='largest broker' className='img-fluid' />
                </div>
                 <div className='col-6 p-5 mt-3'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>
                        Zerodha is the largest stock broker in India with over 10 million clients, offering a wide range of financial services including equity, commodity, and currency trading.   
                    </p>
                    <div className='row'>
                        <div className='col-6'>
                             <ul>
                        <li><p>Futures and Options</p></li>
                         <li><p>Commodities derivatives</p></li>
                          <li><p>Currency derivatives</p></li>

                    </ul>

                        </div>
                         <div className='col-6'>
                            <ul>
                                <li><p>Stocks & IPOs</p></li>
                                 <li><p>Direct mutual funds</p></li>
                          <li><p>Bonds & Government Securities</p></li>
                                
                                
                                </ul>                            
                        </div>
                        <img src='/media/Images/pressLogos.png' alt='press logos' className='img-fluid mt-5' style={{width:"90%"}} />
                    </div>
                   
                 </div>

                </div>
        </div>
     );
}

export default Awards;