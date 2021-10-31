import React, { useEffect, useState } from 'react';


import '../../home/service/Service.css';
import '../../home/services/Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://chilling-pirate-97852.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    const handleDelete = id => {
        const url = `https://chilling-pirate-97852.herokuapp.com/services/${id}`;
        fetch(url,
            {
                method: 'DELETE'
            }

        ).then(res => res.json)
            .then(data => {
                console.log(data);
                alert('removed');
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
            })

    }


    return (
        <>
            <div id="services">
                <h2 className="text-primary p-2 text-center mt-5">All Services</h2>
                <div className="service-container">
                    {
                        services.map(service => <div
                            key={service.id}>


                            <div className="service pb-3">
                                {/* <img src={image} alt="" /> */}
                                <h3>{service.name}</h3>
                                <h5>Price: {service.price}</h5>
                                <p className="px-3">{service.description}</p>
                                <button onClick={() => handleDelete(service._id)} className="btn btn-danger">Delete</button>

                            </div>

                        </div>)
                    }
                </div>
            </div>
        </>
    );
};

export default Services;