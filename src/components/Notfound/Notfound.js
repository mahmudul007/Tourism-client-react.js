import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1 from './Image/404.jpg'
const Notfound = () => {
    return (
        <div>
            <Navbar.Brand as={Link} to="/home" className="btn btn-danger">HOME</Navbar.Brand>
            <img src={img1} alt="" srcset="" />


        </div>

    );
};

export default Notfound;