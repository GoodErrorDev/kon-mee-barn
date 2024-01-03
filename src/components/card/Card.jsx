import React, { useState } from 'react'
import Gallery from '../gallery/gallery';
import './Card.css'
import { Link } from 'react-router-dom';
export default function Card(props) {
    const [title, setTitle] = useState(props.title);
    const [content, setContent] = useState(props.content);
    const [image, setImage] = useState(props.image_url);
    const TYPE = 'บ้าน';
    const PropertySelect = () => {
        console.log(title);
    }
    return (
        <>
            <Link to='property/select/{id}'>
                <div className="card card-compact  bg-base-100 shadow-xl mt-4 p-2 card-hover card-layout" onClick={PropertySelect}>
                    <figure><Gallery /></figure>
                    <div className="card-body ">
                        <h2 className="card-title ">New movie is released! {title}</h2>
                        <p>Click the button to watch on Jetflix app. {content}</p>
                        <p>Click the button to watch on Jetflix app. {image}</p>
                        <div className="flex row flex-item">
                            <div className="badge tag-sell badge-outline">{TYPE}</div>
                            <div className="badge badge-outline">default</div>
                            <div className="badge badge-outline">default</div></div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}