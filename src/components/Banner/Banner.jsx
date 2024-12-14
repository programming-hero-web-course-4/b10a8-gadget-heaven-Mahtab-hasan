import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Banner = () => {
    const location = useLocation();
    return (
        <div className={`
            mx-auto py-8 px-4 md:py-16 text-center bg-[#9538E2] text-white 
            ${location.pathname === '/' ? 'rounded-b-[30px]' : ''}
            relative mb-[200px]
            ${location.pathname === '/' ? 'md:mb-[300px]' : (location.pathname === '/dashboard' ? 'md:mb-[60px]' : 'md:mb-[300px]')}
            ${location.pathname === '/' ? 'md:mb-[300px]' : (location.pathname === '/dashboard' ? 'md:h-[250px]' : '')}
            ${location.pathname === '/' ? 'md:mb-[300px]' : (location.pathname === '/statistics' ? 'md:mb-[60px]' : 'md:mb-[300px]')}
            ${location.pathname === '/' ? 'md:mb-[300px]' : (location.pathname === '/statistics' ? 'md:h-[300px]' : '')}
            ${location.pathname === '/' ? 'md:h-[600px]' : ''}
            h-[450px]
            ${location.pathname === '/' ? 'w-11/12' : 'w-full'}
            `}>
            <div className="text-center max-w-4xl mx-auto">
                {location.pathname === '/' ? (
                    <>
                        <h1 className="md:text-5xl text-base font-bold leading-tight mb-6">Upgrade Your Tech Accessorize with <br className='hidden sm:block' /> Gadget Heaven Accessories</h1>
                        <p className="md:text-xl text-base mb-8">Explore the latest gadgets that will take your experience to the next level. From smart devices to<br className='hidden sm:block' /> the coolest accessories, we have it all!</p>
                        <Link to="/">
                            <button className="btn bg-white text-[#9538E2] px-8 font-bold text-xl rounded-full hover:bg-opacity-90 transition-all">Shop Now</button>
                        </Link>
                    </>
                ) : location.pathname === '/dashboard' ? (
                    <>
                        <h1 className="md:text-5xl text-base font-bold leading-tight mb-6">Dashboard</h1>
                        <p className="md:text-xl text-base mb-8">Explore the latest gadgets that will take your experience to the next level. From smart devices to<br className='hidden sm:block' /> the coolest accessories, we have it all!</p>
                    </>

                ) : location.pathname === '/statistics' ? (
                    <>
                        <h1 className="md:text-5xl text-base font-bold leading-tight mb-6">Statistics</h1>
                        <p className="md:text-xl text-base mb-8">Explore the latest gadgets that will take your experience to the next level. From smart devices to<br className='hidden sm:block' /> the coolest accessories, we have it all!</p>
                    </>

                ) : location.pathname.startsWith('/product/') ? (
                    <>
                        <h1 className="md:text-5xl text-base font-bold leading-tight mb-6">Product Details</h1>
                        <p className="md:text-xl text-base mb-8">Explore the latest gadgets that will take your experience to the next level. From smart devices to<br className='hidden sm:block' /> the accessories, we have it all!</p>
                        <Link to="/">
                            <button className="btn bg-white text-[#9538E2] px-8 font-bold text-xl rounded-full hover:bg-opacity-90 transition-all">Shop Now</button>
                        </Link>
                    </>
                ) : (
                    <p>Content for other routes</p>
                )}
            </div>
        </div>
    );
};
export default Banner;