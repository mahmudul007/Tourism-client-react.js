import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../Carousol/Carosol.css';


import img1 from './carousol/image1.jpg'
import img2 from './carousol/image2.jpg'
import img4 from './carousol/image4.jpg'
import { Link } from 'react-router-dom';

const Carousol = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item >
                    <Carousel.Caption className="text-center">
                        <h1>Sea Beach !Refresh Your mind</h1>
                        {/* <Link to="/booking">  <button className="btn btn-success" >Book Service</button></Link> */}
                    </Carousel.Caption>

                    <img
                        className="d-block  w-100 "
                        height="500"
                        src={img1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        height="500"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className="txt-dark">Hill make Your heart Beat Faster</h1>

                        {/* <Link Link as={HashLink} to="/home#services">   <button className="btn btn-danger">Want to go?</button></Link> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img4}
                        height="500"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>Night Camping</h1>
                        <p>Owah Make You brave , learn How to live.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carousol;