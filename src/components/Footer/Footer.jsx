import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white py-10 mt-20">

            <div className="text-center p-10">
                <h1 className='font-bold text-2xl'>Gadget Heaven</h1>
                <p className='text-gray-600 pt-3'>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <hr className='w-11/12 mx-auto pt-10' />
            <div className="w-11/12 mx-auto footer">

                <nav className='md:mx-auto'>
                    <ul className='md:text-center'>
                        <li className="footer-title">Services</li>
                        <li className="link link-hover py-1">Product Support</li>
                        <li className="link link-hover py-1">Order Tracking</li>
                        <li className="link link-hover py-1">Shipping & Delivery</li>
                        <li className="link link-hover py-1">Returns</li>

                    </ul>
                </nav>
                <nav className='md:mx-auto'>
                    <ul className='md:text-center'>
                        <li className="footer-title">Company</li>
                        <li className="link link-hover py-1">About Us</li>
                        <li className="link link-hover py-1">Careers</li>
                        <li className="link link-hover py-1">contact</li>
                    </ul>
                </nav>
                <nav className='md:mx-auto'>
                    <ul className='md:text-center'>
                        <li className="footer-title">Legal</li>
                        <li className="link link-hover py-1">Terms of use</li>
                        <li className="link link-hover py-1">Privacy Policy</li>
                        <li className="link link-hover py-1">Cookie Policy</li>
                    </ul>
                </nav>
            </div>
        </footer>

    );
};

export default Footer;