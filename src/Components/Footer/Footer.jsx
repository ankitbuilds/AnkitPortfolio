import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="text-left">
                <h1>Ankit</h1>
                <p>I am a frontend developer from,
                 USA with 10 years of experience in companies like Microsoft, Tesla and Apple.</p>
            </div>
            <div className="text-right">
                <input className="btn-1" type="email" placeholder="Enter your Email"/>
                <button className="btn">Subscribe</button>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <div className="bottom-left">
            © 2023 Alex Bennett. All rights reserved.
            </div>
            <div className="bottom-right">
                <ul>
                    <li>Terms of Services</li>
                    <li>Privacy Policy</li>
                    <li>Connect with me</li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Footer