
// Home JS 

import React from 'react';
import './Home.css'
import bannerbg from '../../../images/banner-bg.png';
import bannerItem from '../../../images/banner-item.png';
import prfectSectionImg from '../../../images/perfect.png';
import premiumSectionImg from '../../../images/bose_759944_0020_quietcomfort_35_acoustic_noise_1250648_1_ 1.png';
import battertySectionImg from '../../../images/guy 1.png';
import lastSectionImg from '../../../images/last.png'
import Products from '../../Products/Products';
import useProducts from '../../CustomHooks/UseProducts';
import Product from '../../Product/Product';
import { Link } from 'react-router-dom';

const Home = () => {
    const [products, setProduct] = useProducts();
    const splice = products.slice(products, 6);
    return (
        <div>
            <div className="banner-section">
                <div className="text-container-part">

                    <h1>
                        QuietComfort 35 wireless headphones II
                    </h1>
                    <div className="banner-cart">
                        <p> $229.95 </p>
                        <button className='banner-btn'> BUY NOW </button>
                    </div>
                </div>
                <div className="img-part">
                    <img src={bannerItem} alt="" />

                </div>
            </div>
            <div className="perfect-sound-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6 perfect-img-part">
                            <img className='perfectSectionImg' src={prfectSectionImg} alt="" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 perfect-txt-part">
                            <h1>
                                Perfect sound
                                immersive world
                            </h1>
                            <p>
                                QuietComfort 35 wireless headphones II are engineered with renowned noise cancellation. With the Google Assistant and Amazon Alexa built-in, you have instant access to millions of songs, playlists and more—hands free.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="products-container">
                    <div className="container">
                        <h1 className='text-center products-title'> Our All Products {products.length}  </h1>
                        <div className="load-products">
                            {
                                splice.map(product => <Product
                                    key={product._id}
                                    product={product}
                                ></Product>)
                            }
                            <Link className='load-all-product' to="/products">   Load All Item   </Link>

                        </div>
                    </div>
                </div>
            </div>

            <div className="Premium-section">
                <div className="container">
                    <div className="Premium-text-part">
                        <h1 className="text-center">
                            Premium design
                        </h1>
                        <p>
                            When you want to take your music anywhere, you need headphones built to keep up. With impact-resistant materials, glass-filled nylon, and corrosion-resistant stainless steel, they’re engineered to survive life on the go.

                        </p>
                    </div>
                    <div className="premimu-img-section">
                        <img className='premium-img' src={premiumSectionImg} alt="" />

                    </div>
                </div>

            </div>


            <div className="battery-life-section">
                <div className="container">
                    <div className="row">


                        <div className="col-12 col-md-6 col-lg-6 battery-txt-part">
                            <h1>
                                Up to 20 hours battery life
                            </h1>
                            <p>
                                Enjoy up to 20 hours of listening, enough time to pore through this entire playlist. So you can keep the music — or the quiet — going all day long. And when it finally runs down, a quick 15-minute charge gives you another 2.5 hours.
                            </p>
                        </div>



                        <div className="col-12 col-md-6 col-lg-6 battery-img-part">
                            <img className='batterySectionImg' src={battertySectionImg} alt="" />
                        </div>

                    </div>
                </div>
            </div>

            <div className="last-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6 last-section-img">
                            <img src={lastSectionImg} alt="" />

                        </div>
                        <div className="col-12 col-md-6 col-lg-6 last-section-text-part">
                            <h1>
                                Being first has its perks

                            </h1>
                            <p>
                                Sign up to get more information about Bose, exclusive first looks at promotions, new products and more.

                            </p>
                            <div className="input-and-btn">
                                <input className='input-email' type="email" name="email" id="1" placeholder='Enter your mail' />
                                <input className='input-submit' type="submit" value="SIGN IN" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;