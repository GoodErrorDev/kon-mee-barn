import React, { useState } from "react";
import "./gallery.css";
import Modal from "../modal/modal";

function Gallery() {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState("");

    const images = [
        "https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
        "https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg",
        "https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg",
        "https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg",
        // Add more image URLs here
    ];

    const openModal = (imageUrl) => {
        console.log("Opening modal with image:", imageUrl); // Debugging
        setCurrentImage(imageUrl);
        setModalOpen(true);
        document.getElementById('my_modal_1').showModal();
    };

    return (
        <div>
            <div className="image-gallery">
                {images.map((image, index) => (
                    <div key={index} className="gallery-image" onClick={() => {openModal(image),setModalOpen(true);} }>
                        <img src={image} alt={`Image ${index}`} />
                    </div>
                ))}
            </div> 
            <Modal id="my_modal_1" image={currentImage} onClose={() => {setModalOpen(setModalOpen)}} /> 

        </div>
    );
}

export default Gallery;
