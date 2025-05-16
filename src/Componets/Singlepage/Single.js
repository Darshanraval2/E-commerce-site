import React from 'react'
import { useNavigate, useParams } from "react-router-dom"
import Data from "../Data/Datadetail"
import "./Single.css"
import { useDispatch, useSelector } from 'react-redux'
import { addtocart } from '../Store/Cartslice'
import { toast } from 'react-toastify'

const Single = () => {

    const { id } = useParams();

    const item = Data.find((aa) => aa.id === Number(id));

    let name = useSelector((state) => state.cart);

    let dispatch = useDispatch();
    let naviget = useNavigate();

    let ADD = (item) => {
 let product = name.find((ee) => ee.id === item.id )

        if(!product){
             dispatch(addtocart(item));
        }else{
            toast.info("Sucessfully Add")
        
    }

};

    let BACK = () => {
        naviget('/');
    }


    return (
        <div className='singlectn' key={item.id}>

            <div className='single'>

          <div>  <img src={item.image} alt={item.title} /> </div>
            <h4>{item.title}</h4>
            <h4><span>$ </span>{item.price}</h4>
            <h4><span>Category : </span>{item.category}</h4>
            <h4><span>Brand : </span>{item.brand}</h4>
            <h4><span>Description : </span>{item.description}</h4>

            <button onClick={() => ADD(item)}>Add to Cart <i class="fa-solid fa-cart-shopping"></i></button> 
              
            <button onClick={BACK}>Back to Home</button>
            </div>


        </div>
    )
}

export default Single
