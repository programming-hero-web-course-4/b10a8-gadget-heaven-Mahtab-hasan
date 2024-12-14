import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { useCart } from '../CartContext/CartContext';

const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const { cart, wishlist } = useCart();


    const links = <>
        <li ><NavLink to='/'>Home</NavLink></li>
        <li ><NavLink to='/statistics'>Statistics</NavLink></li>
        <li ><NavLink to='/dashboard'>Dashboard</NavLink></li>
    </>
    return (
        <div className={`w-11/12 mx-auto navbar ${isHomePage ? 'bg-[#9538E2]' : ''} rounded-t-[30px] px-4 md:px-20 pt-4 ${isHomePage ? 'md:pt-10' : ''} `}>

            <div className="navbar-start">

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-sm md:btn-md lg:hidden">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 md:5 md:w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                        {links}
                    </ul>
                </div>
                <a className={`btn btn-ghost ${isHomePage ? 'text-white' : 'text-black'} text-sm md:text-xl`}>Gadget Heaven</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold ${isHomePage ? 'text-white' : 'bg-black'} ">
                    {links}
                </ul>
            </div>


            <div className="navbar-end gap-1 md:gap-2">
                <button className="btn btn-sm md:btn-md rounded-full bg-white relative">
                    <IoCartOutline size={16} className="md:text-xl" />
                    {cart.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">{cart.length}</span>
                    )}
                </button>

                
                <button className="btn btn-sm md:btn-md rounded-full bg-white relative">
                    <CiHeart size={16} className="md:text-xl" />
                    {cart.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                            {wishlist.length}
                        </span>
                    )}
                </button>

            </div>
        </div>
    );
};


export default Navbar;