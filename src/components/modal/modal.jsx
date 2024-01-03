import React, { useEffect, useState } from "react";
import "./modal.css"; // Separate CSS file for the Modal

const Modal = (props) => {
    const [imageContent, setImageContent] = useState(''); 
    useEffect(() => {
        setImageContent(props.image); 
    });

    return (
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box modal-box-custom">
                <div className="modal-action justify-between">
                    <div className="modal-header">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click the button below to close</p>
                    </div>
                    <form method="dialog">
                        <button className="btn">Close</button>
                    </form>
                </div>
                <div className="modal-content-custom">
                    <img src={imageContent} alt='Image' />
                </div>

            </div>
        </dialog>
    );
};

export default Modal;
