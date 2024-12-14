import React, { useState, useEffect } from 'react';
import { useCart } from '../../components/CartContext/CartContext';
import { toast } from 'react-toastify';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import useDocumentTitle from '../hook/useDocumentTitle';
import { TiExportOutline } from 'react-icons/ti';

const Dashboard = () => {
    useDocumentTitle('Dashboard');
    const navigate = useNavigate();
    const { cart, removeFromCart, wishlist, addToCart, removeFromWishlist, clearCart } = useCart();
    const [activeTab, setActiveTab] = useState('cart');
    const [sortedCart, setSortedCart] = useState([]);
    const [isSorted, setIsSorted] = useState(false);
    const totalCost = sortedCart.reduce((total, item) => total + item.price, 0).toFixed(2);
    const [showPurchaseModal, setShowPurchaseModal] = useState(false);
    const [totalPaid, setTotalPaid] = useState(0);

    useEffect(() => {
        setSortedCart(cart);
    }, [cart]);
    const sortByPrice = () => {
        if (isSorted) {
            setSortedCart(cart);
        } else {
            const sorted = [...cart].sort((a, b) => b.price - a.price);
            setSortedCart(sorted);
        }
        setIsSorted(!isSorted);
    };

    const handleAddToCart = (item) => {
        addToCart(item);
        removeFromWishlist(item.uniqueId);
        toast.success(`${item.product_title} has been added to your cart!`);
    };
    const handlePurchase = () => {
        setTotalPaid(totalCost);
        setShowPurchaseModal(true);
        clearCart();
        setSortedCart([]);
    };
    const closeModal = () => {
        setShowPurchaseModal(false);
        navigate('/');
    };
    return (

        <div className="container mx-auto">
            <div className="flex justify-center space-x-4 mb-4">
                <button onClick={() => setActiveTab('cart')} className={`px-4 py-2 rounded-3xl ${activeTab === 'cart' ? 'bg-[#9538E2] text-white' : 'bg-gray-200'}`}>Cart</button>
                <button onClick={() => setActiveTab('wishlist')} className={`px-4 py-2 rounded-3xl ${activeTab === 'wishlist' ? 'bg-[#9538E2] text-white' : 'bg-gray-200'}`}>Wishlist</button>
            </div>
            {activeTab === 'cart' ? (
                <ul>
                    <div className="mt-4 flex gap-2 items-center justify-between">
                        <h2 className='text-3xl'>Cart</h2>
                        <div className="flex items-center gap-2">
                            <p className='text-lg font-bold'>Total cost: ${totalCost}</p>
                            <button onClick={sortByPrice} className='bg-purple-600 text-white px-4 py-2 rounded-3xl'>Sort by Price</button>
                            <button onClick={handlePurchase} disabled={sortedCart.length === 0 || totalCost === '0.00'} className={`px-4 py-2 rounded-3xl text-white ${sortedCart.length === 0 || totalCost === '0.00' ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'}`}>Purchase</button>
                        </div>
                    </div>
                    {sortedCart.length === 0 ? (
                        <p className='text-xl'>Your cart is empty.</p>
                    ) : (
                        <ul className='mt-4 space-y-4'>
                            {sortedCart.map((item) => (
                                <li key={item.uniqueId} className='flex items-center justify-between border p-4 rounded-lg shadow-md'>
                                    <img src={item.product_image} alt={item.product_title} className='w-24 h-18 rounded-lg' />
                                    <div className="flex-1 mx-4 text-left">
                                        <h3 className='text-xl font-bold'>{item.product_title}</h3>
                                        <p className='text-gray-600'>{item.description}</p>
                                        <p className='text-lg font-semibold'>Price: ${item.price.toFixed(2)}</p>
                                    </div>
                                    <button onClick={() => {
                                        removeFromCart(item.uniqueId);
                                        toast.success(`${item.product_title} has been removed from your cart!`);
                                    }} className='text-red-500 text-xl'>X</button>
                                </li>
                            ))}
                        </ul>
                    )}
                </ul>
            ) : (
                <>
                    <h2 className='text-3xl'>Wishlist</h2>
                    {wishlist.length === 0 ? (
                        <p className='text-xl'>Your wishlist is empty.</p>

                    ) : (
                        <ul className='mt-4 space-y-4'>
                            {wishlist.map((item, index) => (
                                <li key={index} className='flex items-center justify-between border p-4 rounded-lg shadow-md'>
                                    <img src={item.product_image} alt={item.product_title} className='w-24 h-18 rounded-lg' />
                                    <div className="flex-1 mx-4 text-left">
                                        <h3 className='text-xl font-bold'>{item.product_title}</h3>
                                        <p className='text-gray-600'>{item.description}</p>
                                        <p className='text-lg font-semibold'>Price: ${item.price.toFixed(2)}</p>
                                        <button onClick={() => handleAddToCart(item)} className='rounded-2xl px-5 py-1 bg-purple-600 text-white my-2'>Add to Cart</button>
                                    </div>
                                    <button onClick={() => removeFromWishlist(item.uniqueId)} className='text-red-500 text-xl'>X</button>
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            )
            }
            {
                showPurchaseModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
                            <div className="flex flex-col items-center text-center">
                                <FaCheckCircle className="text-green-500 text-6xl mb-4" ></FaCheckCircle>
                                <h2 className='text-2xl font-bold mb-2'>Payment Successful!</h2>
                                <p className='text-gray-600 mb-4'>Thank you for your purchase</p>
                                <p className='text-xl font-bold mb-6'>Total Paid: ${totalPaid}</p>
                                <button onClick={closeModal} className='bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700'>Close</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    );
};

export default Dashboard;