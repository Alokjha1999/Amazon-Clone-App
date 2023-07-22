import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import './footer.css';

function Footer() {
    return (
        <div className='footer'>

            <div class="about-us">
                <div class="summary">
                    <ul>
                        <p> Get to Know Us</p>
                        <li> Careers</li>
                        <li> Blog</li>
                        <li> About Us</li>
                        <li> Investor Relations</li>
                        <li>  Amazon Devices </li>
                        <li>  Amazon Science</li>
                    </ul>
                </div>
                <div class="summary">
                    <ul>
                        <p>Make Money with Us </p>
                        <li> Sell products on Amazon</li>
                        <li>Sell under Amazon Accelerator </li>
                        <li> Amazon Global Selling</li>
                        <li> Become an Affiliate</li>
                        <li> Advertise Your Products</li>
                        <li> Self-Publish with Us</li>
                
                        <li> Amazon Pay on Merchants</li>


                    </ul>
                </div>

                <div class="summary">
                    <ul>
                        <p> Amazon Payment Products</p>
                        <li>    Amazon Business Card</li>
                        <li>    Shop with Points</li>

                        <li>    Reload Your Balance</li>
                        <li>    Amazon Currency Converter</li>
                    </ul>
                </div>

                <div class="summary lastfooter">
                    <ul>
                        <p> Let Us Help You</p>
                        
                        <li>     Your Account </li>
                        <li>     Your Orders</li>
                        <li>    Shipping Rates & Policies</li>
                        <li>    Returns & Replacements</li>
                        <li>100% Purchase Protection</li>
                        <li>    Amazon Assistant</li>
                        <li>    Help</li>
                    </ul>

                </div>
            </div>

            <div className='footer'>
                <div className='intro'>
                    <h4>Created by Alok Technology</h4>
                    <p>© 2023 Alok
                      All rights reserved.</p>
                </div>
                <div className='footer_icons'>
                <a href='https://github.com/Alokjha1999'> <li>   <AiFillGithub /></li> </a> 
                <a href='https://www.linkedin.com/in/ak28/'> <li>   <AiFillLinkedin /></li> </a> 
                <a href='https://www.instagram.com/aloktechnology/'> <li>   <AiFillInstagram /></li> </a> 
                <a href='https://twitter.com/aloktech2023?t=Nn8HU1aNR_IKmda9G3gGsA&s=09'> <li>    <AiOutlineTwitter /> </li> </a> 
                <a href='https://www.facebook.com/alokkashyap1828/'> <li>   <AiFillFacebook /> </li> </a> 

                    
                </div>

            </div>
        </div>


    )
}

export default Footer
