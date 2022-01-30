import React from 'react'
import { useStateValue } from './StateProvider';
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import image77 from "./asset/images/image77.jpg";



function Checkout() {
    const [{basket, user}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                   
        {basket?.length === 0 ?
        (
        <div>   
            <h2>Your Shopping Basket is empty</h2>
            <p>
            You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.
            </p>
        </div>
        ) : 
        (
            <div>
                <img className="checkout__ad"
                src={image77} 
                alt="" />
                <h3>Hello, {user?.email}</h3>
                <h2 className="checkout__title">Your Shopping Basket</h2>
              
                {/* List out all of the checkout products */}
                {basket?.map((item) => (
                

                          <CheckoutProduct 
                          id = {item.id}
                          title = {item.title}
                          image = {item.image}
                          price = {item.price}
                          rating = {item.rating}
                          
                          />
                    
                ))}
            </div>
        )}
        </div>
        {basket.length > 0 && (
            <div className="checkout__right">
                <Subtotal />
            </div>
        )}
        </div>
    );
};

export default Checkout;
