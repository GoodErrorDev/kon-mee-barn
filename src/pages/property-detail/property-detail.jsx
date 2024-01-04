import React from 'react'
import { useParams } from 'react-router-dom';
export default function PropertyDetail() {
    let { id } = useParams();
    console.log('detail ' + id);

    return (
        <div>
            {/* Logic to display the selected property based on the id */}
            <p>Selected Property ID: {id}</p>
        </div>
    );
}
