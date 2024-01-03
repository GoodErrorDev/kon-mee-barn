import React, { useState } from "react";
import "./gallery.css";
import Modal from "../modal/modal";

function Gallery() {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState("");

    const images = [{
        image_type: 'main',
        // image_url: 'https://scontent.fbkk9-2.fna.fbcdn.net/v/t39.30808-6/409688236_897621151747718_2339104900228329199_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeFY66XxBQ7fRfJIWJyEyd4muZ3Sc1cnCWm5ndJzVycJaR4GYB-0twS8RiL2w8PLiRwy4jKRQIIilgKbzSXbhqe9&_nc_ohc=6Km8gu2qgDkAX9dRB-f&_nc_ht=scontent.fbkk9-2.fna&oh=00_AfA6Qfk_2H5k8qF60FetZRgA3Gi5RBsHVyUgwvmFR93KXw&oe=6580B348',

        // image_url: 'https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg',

        image_url: 'src/assets/images/Screenshot 2023-12-15 000533.png',

    }, {
        image_type: 'sub',
        
        image_url: 'src/assets/images/Screenshot 2023-12-15 000533.png',
    }, {
        image_type: 'sub',
        image_url: 'https://scontent.fbkk12-4.fna.fbcdn.net/v/t39.30808-6/409809215_897621258414374_5301886759596016485_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeFT7tMLTJ-71cjelKSzrONjS1Ry24K9YHNLVHLbgr1gcwTlELpZ7XDdMi08-kAYZ4ftjCNBSetaSCyVHpJxYi_1&_nc_ohc=BujNBBfgCSUAX-MNJZI&_nc_ht=scontent.fbkk12-4.fna&oh=00_AfDARHg01mLzjMe4zJ4RzwuG-4Apvkdd1Y3v_kLr_8CDkQ&oe=6580AE35',

    }, {
        image_type: 'sub',
        image_url: 'https://scontent.fbkk13-1.fna.fbcdn.net/v/t39.30808-6/409809202_897622518414248_6083383726877969098_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeFdNXDLkzB2bILdcoazkpXyzX7ICMWLiErNfsgIxYuISgLZAIvbVbdODPkYbSqGGHwFm0egAEzqm5GizZG1LJ2o&_nc_ohc=Pxt0rlOToFsAX9G_5g3&_nc_ht=scontent.fbkk13-1.fna&oh=00_AfAwftka1_tT9T4ccj3fXeRBCxbeqJ97Pb96W30lyTtUNA&oe=6580AF61',

    }, {
        image_type: 'sub',
        image_url: 'https://scontent.fbkk13-1.fna.fbcdn.net/v/t39.30808-6/409160100_897622548414245_7011421200512864530_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeEtLD3PCtQy0z-wHAoKQQtyZeyHFAFUpEdl7IcUAVSkRzjZiPCs8KcvnrG062D8OWWu_Uo1YSh9YseNcGnmEV7S&_nc_ohc=1jWBirMC7DMAX8KAOW4&_nc_ht=scontent.fbkk13-1.fna&oh=00_AfCFvYWv_hQQlNugMwbi-42EVm5t-SPHkVDwkCPYHMDGoQ&oe=657F38B2',

    }, {
        image_type: 'sub',
        image_url: 'https://scontent.fbkk13-1.fna.fbcdn.net/v/t39.30808-6/409160100_897622548414245_7011421200512864530_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeEtLD3PCtQy0z-wHAoKQQtyZeyHFAFUpEdl7IcUAVSkRzjZiPCs8KcvnrG062D8OWWu_Uo1YSh9YseNcGnmEV7S&_nc_ohc=1jWBirMC7DMAX8KAOW4&_nc_ht=scontent.fbkk13-1.fna&oh=00_AfCFvYWv_hQQlNugMwbi-42EVm5t-SPHkVDwkCPYHMDGoQ&oe=657F38B2',

    }
    ];

    const openModal = (imageUrl) => {
        console.log("Opening modal with image:", imageUrl); // Debugging
        setCurrentImage(imageUrl);
        setModalOpen(true);
        document.getElementById('my_modal_1').showModal();
    };

    return (
        <div>

            <div className="grid gap-1 grid-content-image">
                <div className="main-image-content col-12">
                    {
                        images.filter(element => element.image_type === 'main').map((element, index) => (
                            <img
                                key={index}
                                className="main-image rounded-md"
                                src={element.image_url}
                                alt="Main Image" />
                        ))
                    }

                </div>

                <div className="flex row col-12 flex-item-sub-image">
                    {images.filter(element => element.image_type === 'sub').map((element, index) => (
                        <div
                            key={index}
                            className="sub-image-content col-3"
                            onClick={() => {
                                openModal(element.image_url);
                                setModalOpen(true);
                            }}>
                            <img
                                key={index}
                                className="sub-image rounded-sm"
                                src={element.image_url}
                                alt={`Sub Image ${index}`} />
                        </div>
                    ))}
                </div>
            </div>

            <Modal key={1} id="my_modal_1" image={currentImage} onClose={() => { setModalOpen(setModalOpen) }} />

        </div>
    );
}

export default Gallery;
