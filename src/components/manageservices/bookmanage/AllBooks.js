import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';

const AllBooks = () => {
    const { user } = useAuth();
    const [orders, setOrder] = useState([]);

    useEffect(() => {
        fetch(`https://chilling-pirate-97852.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => {
                setOrder(data);

            })



    }, [])



    const handleDelete = id => {
        const url = `https://chilling-pirate-97852.herokuapp.com/orders/${id}`;
        fetch(url,
            {
                method: 'DELETE'
            }

        ).then(res => res.json)
            .then(data => {
                console.log(data);
                alert('removed');
                const remaining = orders.filter(order => order._id !== id);
                setOrder(remaining);
            })

    }
    return (
        <>
            <h1 className="fs-1 text-success text-center">All orders</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 ">
                {
                    orders.map(myorder => <div
                        key={myorder._id}>




                        <div class="">
                            <div class="col bg-succcess">
                                <div class="card h-100">
                                    {/* <img src="..." class="card-img-top" alt="..."> */}
                                    <div class="card-body">
                                        <h5 class="card-title">{myorder.name}</h5>
                                        <p>Name:{myorder.Name}</p>
                                        <p>Email:{myorder.email}</p>
                                        <address>From:{myorder.address}</address>
                                        <p>{myorder.phone}</p>
                                        <button className="btn btn-danger" onClick={() => handleDelete(myorder._id)}>Decline this order</button>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    )
                }

            </div>
        </>
    );
};

export default AllBooks;