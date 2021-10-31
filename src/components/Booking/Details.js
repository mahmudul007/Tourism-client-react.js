import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const Details = () => {

    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`https://chilling-pirate-97852.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));

    }, [])

    return (
        <div>
            <h3>details of{service.name}</h3>
            <h2>this is booking: {serviceId}</h2>
        </div>
    );
};

export default Details;