import React from 'react'
import { Link } from 'react-router-dom';

export default function Dashoard() {
    return (
        <>
            <div className="artboard phone-1">320×568</div>
            <div className="artboard phone-1">320×568</div>
            <p>Dashboard</p>
            <Link to="/">
                <button className="btn btn-primary">Home</button>
            </Link>
            <Link to="/404">
                <button className="btn btn-primary">404</button>
            </Link>
        </>
    )
}
