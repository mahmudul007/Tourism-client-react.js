import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import '../../home/service/Service.css';


const Booking = () => {
    const { user } = useAuth();
    const [service, setService] = useState({});
    const { register, handleSubmit, reset } = useForm({});
    const { serviceId } = useParams();




    useEffect(() => {
        fetch(`https://chilling-pirate-97852.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));

    }, [])




    const onSubmit = data => {


        console.log(data);
        axios.post('https://chilling-pirate-97852.herokuapp.com/orders', data)
            .then(res => {

                if (res.data.insertedId) {
                    alert('book seccuefully');

                }
                reset();


            })


    };


    //     https://i.ibb.co/MZzM9p1/rei-kim-X5-Cywe-ASt-IY-unsplash-1.jpg
    // https://i.ibb.co/MZzM9p1/rei-kim-X5-Cywe-ASt-IY-unsplash-1.jpg
    // https://i.ibb.co/HK9MxQ6/amit-ranjan-mh-JODzwz-Ctg-unsplash-1.jpg
    // https://i.ibb.co/ys7JCRd/tommy-lisbin-2-DH-q-MX6-M4-E-unsplash-1.jpg
    // https://i.ibb.co/3hyBKpd/jacek-smoter-r-EGEe-XPQ1-FU-unsplash-1.jpg
    // https://i.ibb.co/dG9KJ9X/maitheli-maitra-n-Z2c-Eh8-Qzcg-unsplash-1.jpg
    // https://i.ibb.co/BKqvf0Z/hemendra-ahuja-WWDXwam1j-G4-unsplash-1.jpg
    // https://i.ibb.co/ZM47CyL/famous-eiffel-tower-paris-autumn-1.jpg


    return (
        <div className="d-flex">
            <div>
                <div className="service pb-3">
                    <img src={service.image} alt="" />
                    <h3>{service.name}</h3>
                    <h5>Price: {service.price}</h5>
                    <p className="px-3">{service.description}</p>
                </div>
            </div>


            <div className="form input-group mb-3 p-5">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Book for Travel</h1>
                    <input className="input-group-text form-control" placeholder="name" {...register("name")} defaultValue={service.name} /> <br />
                    <input className="input-group-text form-control" placeholder="Email " {...register("email")} defaultValue={user.email} /> <br />
                    <input className="input-group-text form-control" placeholder="Name " {...register("Name")} defaultValue={user.displayName} /> <br />
                    <input className="input-group-text form-control" type="adress" placeholder="address" {...register("address")} /> <br />
                    <input className="input-group-text form-control" type="number" {...register("phone")} /> <br />
                    <input className="btn btn-success d-grid gap-2 col-6 mx-auto m-3 p-3" type="submit" />
                </form>
            </div>
        </div>


    );
};

export default Booking;