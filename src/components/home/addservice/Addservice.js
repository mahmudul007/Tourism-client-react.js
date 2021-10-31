import axios from 'axios';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './Addservice.css';



const Addservice = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {


        console.log(data);
        axios.post('https://chilling-pirate-97852.herokuapp.com/services', data)
            .then(res => {

                if (res.data.insertedId) {
                    alert('inserted seccuefully');

                }
                reset();

            })

    };
    return (
        <>
            <div className="add-service">


                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className=" text-warning">Add new services</h1>
                    <input className="form-control" placeholder="name" {...register("name")} />
                    <input className="form-control" placeholder="description" {...register("description")} />
                    <input className="form-control" placeholder="price" type="number" {...register("price")} />
                    <input className="form-control" placeholder="image link" {...register("image")} />
                    <input className="btn btn-success" type="submit" />
                </form>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/allorder" className="btn btn-success text-danger fs-3 d-grid gap-2 col-6 mx-auto m-3 p-3">Manage All order</Nav.Link>

                </Nav>
                <br />
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/servicemanage" className="btn btn-primary text-danger fs-3 d-grid gap-2 col-6 mx-auto m-3 p-3">Manage All service</Nav.Link>

                </Nav>

            </div>

        </>
    );
};

export default Addservice;