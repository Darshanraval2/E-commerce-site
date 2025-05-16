import React, { useState } from 'react'
import Data from "../Data/Datadetail"
import './Home.css'
import { useSelector, useDispatch } from 'react-redux'
import { addtocart } from '../Store/Cartslice'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import "../Slider/Slider"
import AdaptiveHeight from '../Slider/Slider'
import { addToWish } from "../Store/Whishslice"

const Home = () => {
    let [sold, setSold] = useState(Data);
    let [search, setSearch] = useState("");
    let [select, setSelect] = useState("");

    let name = useSelector((state) => state.cart);
    let dispatch = useDispatch();

    let ADD = (item) => {
        let product = name.find((ee) => ee.id === item.id)
        if (!product) {
            dispatch(addtocart(item));
        } else {
            toast("Successfully Added")
        };
    }

    let like = useSelector((state) => state.whish);
    let wisdispatch = useDispatch();

    let Wish = (item) => {
        let exist = like.find((wishItem) => wishItem.id === item.id);
        if (!exist) {
            wisdispatch(addToWish(item));
            toast.success("Added to Wishlist");
        } else {
            toast.info("Already in Wishlist");
        }
    };

    let CLICKME = (e) => {
        setSearch(e.target.value);
        let product = Data.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase()));
        setSold(product);
    }

    let CATEGORY = (ss) => {
        let cte = Data.filter((ee) => ee.category === ss);
        setSold(cte);
    };

    let PRICE = (e) => {
        setSelect(e.target.value);
        let Price = Data.filter((item) => {
            if (e.target.value === "") {
                return true;
            }
            else if (e.target.value === "0-50") {
                return item.price >= 0 && item.price <= 50;
            }
            else if (e.target.value === "50-200") {
                return item.price >= 50 && item.price <= 200;
            }
            else if (e.target.value === "200-500") {
                return item.price >= 200 && item.price <= 500;
            }
            else if (e.target.value === "500-1000") {
                return item.price >= 500 && item.price <= 1000;
            }
            else if (e.target.value === "1000-1500") {
                return item.price >= 1000 && item.price <= 1500;
            }
            else if (e.target.value === "1500-2000") {
                return item.price >= 1500 && item.price <= 2000;
            }
            else {
                return false
            }
        });
        setSold(Price);
    };

    return (
        <div>
            <div> <AdaptiveHeight /></div>

            <div className='category'>
                <div className='srch'>
                    <input type="text" placeholder=' Search here' value={search} onChange={CLICKME} />
                    <button onClick={() => setSold(Data)} className='refresh'>
                        <i className="fa-solid fa-arrows-rotate"></i>
                    </button>
                </div>

                <div className='select'>
                    <select value={select} onChange={PRICE}>
                        <option value="">All</option>
                        <option value="0-50">$0-$50</option>
                        <option value="50-200">$50-$200</option>
                        <option value="200-500">$200-$500</option>
                        <option value="500-1000">$500-$1000</option>
                        <option value="1000-1500">$1000-$1500</option>
                        <option value="1500-2000">$1500-$2000</option>
                    </select>
                </div>

                <button onClick={() => CATEGORY("mobile")}>Mobile</button>
                <button onClick={() => CATEGORY("gaming")}>Gaming</button>
                <button onClick={() => CATEGORY("audio")}>Audio</button>
                <button onClick={() => CATEGORY("laptop")}>Laptops</button>
                <button onClick={() => CATEGORY("appliances")}>Appliances</button>
            </div>

            <div className='homectn'>
                {sold.length === 0 && <h3>Find Proper item !</h3>}
                {sold.map((item) => (
                    <div className='data' key={item.id}>
                        <div className='whis'>
                            <button onClick={() => Wish(item)} className='whisbutton'>
                                <i className="fa-solid fa-heart"></i>
                            </button>
                        </div>

                        <Link to={`/item/${item.id}`}>
                            <img src={item.image} alt={item.title} />
                            <h4>{item.title.slice(0, 25)}</h4>
                            <h4>$ {item.price}</h4>
                            <h4>Category : {item.category}</h4>
                        </Link>

                        <button onClick={() => ADD(item)}>
                            Add to Cart <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
