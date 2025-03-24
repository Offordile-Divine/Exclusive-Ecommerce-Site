import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from "axios";
import {PRODUCT} from "../../products"

const Product = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState();

    useEffect(() => {
        const token = localStorage.getItem("accessToken");

        if (!token) {
            navigate("/login");
        }

        const fetchUserDetail = async () => {
            const authLogin = {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            };
            try {
                const response = await axios.get(
                    `https://one00daysofcoding.onrender.com/v1/products`,
                    authLogin
                )
                setData(response.data);
                setLoading(false);
                console.log(response.data);
                console.log(data);
            } catch (error) {
                console.log(error.message)
            }
        };

        fetchUserDetail();
    }, []);

    return (
        <div className='pd_container'>
            {PRODUCT.map((product) => (
                <li key={Product.id} className='pd_list_item'>
                    <Link to={`/products/${product.id}`} state={{ product }} className='pd_card'>
                        <img src={product.productImage} alt="" />
                        <div>
                            <span className='pd_name'>{product.productName}</span>
                            <span className='pd_item_price'>$ {product.price}</span>
                        </div>
                    </Link>
                    <div className='pd_link_container'>
                        <button>Add to cart</button>
                    </div>
                </li>
            ))}
            <Outlet />
        </div>
    )
}

export default Product