import React, { useState, useEffect, useRef } from 'react';
import { getImageUrl } from "../StoreImageService/firebaseStorageImageService";

const LazyImage = ({ alt, onInView, imagePath, ...props }) => {
    const [isInView, setIsInView] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const imgRef = useRef();
    console.log(imagePath);
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    console.log(onInView);
                    if (onInView) {
                        onInView(imageUrl);
                    }
                    fetchImage();
                    observer.unobserve(imgRef.current);
                }
            });
        }, { rootMargin: "50px" });

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        const fetchImage = async () => {
            try {

                if (imagePath != null) {
                    const url = await getImageUrl(imagePath);
                    setImageUrl(url);
                }
                console.log(imagePath);
                console.log(imageUrl);
            } catch (error) {
                console.error('Error loading image', error);
            } finally {
                setLoading(false);
            }
        };

        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
        };
    }, [onInView, imageUrl, imagePath]);

    return (
        <img
            ref={imgRef}
            src={isInView ? imageUrl : ''}
            alt={alt}
            {...props}
        />
    );
};

export default LazyImage;
