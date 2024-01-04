import React, { useState, useEffect } from 'react'
import Gallery from '../gallery/gallery';
import './Card.css'
import { Link, useNavigate } from 'react-router-dom';
import { getImageUrl } from "../StoreImageService/firebaseStorageImageService";
export default function Card(props) {
    const [title, setTitle] = useState(props.title);
    const [content, setContent] = useState(props.content);
    const [image, setImage] = useState(props.image_url);

    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(title);
    console.log((image%10) );
    const [imagePath, setImagePath] = useState('images/real-estate-images/rest-20240104/' + (image%10 == 0 ? 1: image%10) + '.jpg');

    const navigate = useNavigate();

    const TYPE = 'บ้าน';
    const PropertySelect = () => {
        console.log(title);
        navigate('select/{id}');
    };
    const fetchImage = async () => {
        try {
            if (imagePath != null) {
                const url = await getImageUrl(imagePath);
                setImageUrl(url);
            }
        } catch (error) {
            console.error('Error loading image', error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchImage();
    }, [imagePath]);

    return (
        <>
            <div className="card card-compact  bg-base-100 shadow-xl mt-4 p-2 card-hover card-layout">
                <figure><Gallery imageUrl={imageUrl} loading={loading} /></figure>
                <div className="card-body " onClick={PropertySelect}>
                    <h2 className="card-title ">{title}</h2>
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
        </>
    )
}