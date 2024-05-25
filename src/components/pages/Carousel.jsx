import React from "react";
// import {Carousel} from "react-responsive-carousel"
import './Carousel.css';
import { useState } from "react";

export function Carousel() {
    const [activeImage, setActiveImage] = useState(0);
    const images = [
        // URL des images
        'src/components/img/ext1.jpg',
        'src/components/img/ext2.jpg',
        'src/components/img/ext3.jpg',
        'src/components/img/ext4.jpg',
        'src/components/img/ext5.jpg',
    ];

    return (
        <div></div>
    )
}