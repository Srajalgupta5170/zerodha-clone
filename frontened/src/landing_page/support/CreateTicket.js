import React from 'react';

function CreateTickets() {
   return (
  <div className="container">
    <div className="row p-5 mb-5 mt-5">
      <h1 className="fs-3">
        To create a ticket , select a relevant topic.
      </h1>

      <div className="col-4 p-5 mb-2 mt-2">
        <h4>
          <i className="fa-solid fa-circle-plus"></i> Account opening
        </h4>
        <ul>
          <li><a href=""style={{textDecoration:"none", lineHeight:"2.5"}}>Resident individual</a></li>
          <li><a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Minor</a></li>
          <li><a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Non Resident Indian (NRI)</a></li>
          <li><a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Company, Partnership, HUF and LLP</a></li>
          <li><a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Glossary</a></li>
        </ul>
      </div>

      <div className="col-4 p-5 mb-2 mt-2">
        <h4>
          <i className="fa-solid fa-user"></i> Your Zerodha Account
        </h4>
        <ul>
          <li><a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Your Profile</a></li>
          <li><a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Account modification</a></li>
          <li><a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Client Master Report (CMR) and DP</a></li>
          <li><a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Nomination</a></li>
          <li><a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Transfer and conversion of securities</a></li>
        </ul>
      </div>

      <div className="col-4 p-5 mb-2 mt-2">
        <h4>
          <i className="fa-solid fa-indian-rupee-sign"></i> Funds
        </h4>
        <ul>
          <li><a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Add money</a></li>
          <li><a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Withdraw money</a></li>
          <li><a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Add bank Accounts</a></li>
          <li><a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>eMandates</a></li>
        </ul>
      </div>




      <div className="col-4 p-5 mb-2 mt-2">
        <h4>
          <i className="fa-solid fa-location-arrow"></i> Kite
        </h4>
        <ul>
          <li><a href=""style={{textDecoration:"none", lineHeight:"2.5"}}>IPO</a></li>
          <li><a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Trading FAQs</a></li>
          <li><a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Margin Trading Facility (MTF) </a></li>
          <li><a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Charts and orders</a></li>
          <li><a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Alerts and Nudges</a></li>
           <li><a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>General</a></li>
        </ul>
      </div>

      <div className="col-4 p-5 mb-2 mt-2">
        <h4>
          <i className="fa-solid fa-bullseye"></i>  Console
        </h4>
        <ul>
          <li><a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Portfolio</a></li>
          <li><a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Corporate actions </a></li>
          <li><a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Funds statement</a></li>
          <li><a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Reports</a></li>
          <li><a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Profile</a></li>
          <li><a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Segments</a></li>
        </ul>
      </div>

      <div className="col-4 p-5 mb-2 mt-2">
        <h4>
        <i className="fa-regular fa-clock"></i>  Coin
        </h4>
        <ul>
          <li><a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Mutual funds</a></li>
          <li><a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>National Pension Scheme(NPS)</a></li>
          <li><a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Fixed Deposit(FD)</a></li>
          <li><a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Features on Coin</a></li>
          <li><a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Payments and Orders</a></li>
          <li><a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>General</a></li>
        </ul>
      </div>


    </div>
  </div>
);
}

export default CreateTickets;
