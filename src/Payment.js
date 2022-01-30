import React from 'react';
import './Payment.css';
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct"
import {Link} from "react-router-dom";
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from "./reducer";

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className="payment">
            <div className="payment__container">

                <h3>Checkout Items = <Link to="/checkout"> {basket?.length} </Link> </h3>

                {/* Payment section - delivery address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h4>Delivery Address</h4>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Branka 130/9</p>
                        <p>Brno, Czech Republic</p>
                    </div>
                </div>

                 {/* Payment section - Review Items */}
                 <div className="payment__section">
                 <div className="payment__title">
                        <h4>Review items and delivery</h4>
                    </div>
                    <div className="payment__items">
                    {basket.map((item) => (
                          <CheckoutProduct 
                                id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating}
                                  />
                             ))}
                    </div>
                    </div>

                {/* Payment section -  payment method*/}
                <div className="payment__section">
                <div className="payment__title">
                        <h4>Payment Method</h4>
                    </div>
                    <div className="payment__details">
                        {/* Stripe magic will go */}
                        <form>
                            <div className="payment__priceContainer">
                                <CurrencyFormat 
                                    renderText={(value) => (
                                            <h5 className='payment__total'>Order Total: {value}</h5>
                                            )}                                   
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"€"}
                                    />
                                  
                            </div>
                        </form>
                    </div>
                    </div>
            </div>
            
        </div>
    )
}

export default Payment
