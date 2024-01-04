import React, { useState, useEffect } from "react";
import "./gallery.css";
import Modal from "../modal/modal";
import LazyImage from "../lazyImage/lazyImage";
function Gallery(props) { 
    const [loading, setLoading] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState("");
    const images = [{
        image_type: 'main',
        // image_url: 'https://scontent.fbkk9-2.fna.fbcdn.net/v/t39.30808-6/409688236_897621151747718_2339104900228329199_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeFY66XxBQ7fRfJIWJyEyd4muZ3Sc1cnCWm5ndJzVycJaR4GYB-0twS8RiL2w8PLiRwy4jKRQIIilgKbzSXbhqe9&_nc_ohc=6Km8gu2qgDkAX9dRB-f&_nc_ht=scontent.fbkk9-2.fna&oh=00_AfA6Qfk_2H5k8qF60FetZRgA3Gi5RBsHVyUgwvmFR93KXw&oe=6580B348',

        // image_url: 'https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg',

        image_url: '/src/assets/images/1.jpg',

    }, {
        image_type: 'sub',

        image_url: '/src/assets/images/2.jpg',
    }, {
        image_type: 'sub',

        image_url: '/src/assets/images/3.jpg',
    }, {
        image_type: 'sub',

        image_url: '/src/assets/images/4.jpg',
    }, {
        image_type: 'sub',

        image_url: '/src/assets/images/5.jpg',
    }, {
        image_type: 'sub',

        image_url: '/src/assets/images/6.jpg',
    }, {
        image_type: 'sub',

        image_url: '/src/assets/images/7.jpg',
    }, {
        image_type: 'sub',

        image_url: '/src/assets/images/8.jpg',
    },
    ];

    const openModal = (imagePath) => {
        setCurrentImage(imagePath);
        setModalOpen(true);
        document.getElementById('my_modal_1').showModal();
    };
   
    console.log(props.imagePath); 

    return (
        <div>

            <div className={`grid gap-1 grid-content-image ${(loading) ? 'skeleton ' : ''}`}>
                <div className="main-image-content col-12" >
                    {
                        images.filter(element => element.image_type === 'main').map((element, index) => (
                            <LazyImage
                                className={'main-image'}
                                key={index}
                                imagePath={props.imagePath}
                                loading={loading}
                                alt="Main Image" />
                        ))
                    }

                </div>

                <div className="grid grid-cols-5 gap-1">
                    {images.filter(element => element.image_type === 'sub').map((element, index) => {
                        if (index <= 4) {
                            return (
                                <div
                                    key={index}
                                    className="sub-image-content "
                                    onClick={() => {
                                        openModal(element.image_url);
                                        setModalOpen(true);
                                    }}>
                                    <img
                                        className="sub-image rounded-sm"
                                        src={element.image_url}
                                        alt={`Sub Image ${index}`} />
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>

            </div>

            <Modal key={1} id="my_modal_1" image={currentImage} onClose={() => { setModalOpen(setModalOpen) }} />

        </div>
    );
}

export default Gallery;
