import React from 'react';
import './Home.css';
import Product from '../product/Product';
import Slider from '../slider/Slider';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                {/* <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                /> */}
                <Slider />

                <div className="home__row">
                    <Product
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={11.96}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Amazon Basics High-Back Bonded Leather Executive Office Computer Desk Chair - Black"
                        price={112.54}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/31IEX9ZO8sL._AC_SX466_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Logitech G432 Wired Gaming Headset, 7.1 Surround Sound, DTS Headphone:X 2.0, Flip-to-Mute Mic, PC (Leatherette) Black/Blue"
                        price={48.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61j6ey6mBpL._AC_SL1024_.jpg"
                    />
                    <Product
                        id="3254354345"
                        title="Fitness Tracker with Blood Pressure Heart Rate Sleep Monitor Temperature Monitor, Activity Tracker Smart Watch Pedometer Step Counter for iPhone & Android Phones for Kids Man Women (Black)"
                        price={24.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/61Z5x1M2b9L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;
