import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content mt-8">
            <div>
                <span className="footer-title">Services</span> 
                <a href='/' className="link link-hover">SHOES</a>
                <a href='/' className="link link-hover">PANTS</a>
                <a href='/' className="link link-hover">HIKING SHOES</a>
                <a href='/' className="link link-hover">TEE</a>
                <a href='/' className="link link-hover">Backpack</a>
                <a href='/' className="link link-hover">Hat</a>
                <a href='/' className="link link-hover">Wireless Earbuds</a>
                <a href='/' className="link link-hover">Bottle</a>
            </div> 
            <div>
                <span className="footer-title">Company</span> 
                <a href='/' className="link link-hover">About us</a>
                <a href='/' className="link link-hover">Contact</a>
                <a href='/' className="link link-hover">Jobs</a>
                <a href='/' className="link link-hover">Press kit</a>
            </div> 
            <div>
                <span className="footer-title">Legal</span> 
                <a href='/' className="link link-hover">Terms of use</a>
                <a href='/' className="link link-hover">Privacy policy</a>
                <a href='/' className="link link-hover">Ema John</a>
            </div>
        </footer>
    );
};

export default Footer;