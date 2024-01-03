import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './dashboard.css'
import GoogleMapComponent from '../../components/google-map/GoogleMap';
import GoogleMapDirectionComponent from '../../components/google-map/GoogleMapDirection'; 

export default function Dashoard() { 
    
  <script src="https://api.longdo.com/map/?key=058b5320a3293170ea824666185f14ae"></script> 
    function init() {
        map = new longdo.Map({
          placeholder: document.getElementById('map')
        });
        map.location({ lon:100, lat:16 }, true); // go to 100, 16 when created map
      }
    return (
        <>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body custom-card">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body custom-card">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions  justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
            <div id="map" data-callback="init"></div>

            <Link to="/">
                <button className="btn btn-primary">Home</button>
            </Link>
            <Link to="/404">
                <button className="btn btn-primary">404</button>
            </Link>
            <Link to="/Property">
                <button className="btn btn-primary">Property</button>
            </Link>
        </>
    )
}
