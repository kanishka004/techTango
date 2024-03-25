import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";


const Services = () => {
    return (
        <div>

            <Carousel infiniteLoop autoPlay showArrows={false} showStatus={false} showThumbs={false} interval={2000}>

                <div>
                    <img src={img1} alt="Item1" />
                    <p className='legend'>Mobile app development</p>
                </div>
                <div>
                    <img src={img2} alt="Item2" />
                    <p className='legend'>UI/UX designing</p>
                </div>

            </Carousel>

        </div>
    )
}

export default Services