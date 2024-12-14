import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import useDocumentTitle from '../hook/useDocumentTitle';



const Home = () => {
    useDocumentTitle('Home');
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        fetch('/gadgets.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const filteredProducts = selectedCategory === 'all' ? products : products.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase());

    return (

        <div className="">
            <h1 className='md:pb-11 md:py-0 py-10 text-center md:text-5xl text-2xl font-bold'>Explore Cutting-Edge Gadgets</h1>
            <div className="container mx-auto md:flex">
                <Sidebar onSelectCategory={setSelectedCategory} />
                <div className="container mx-auto px-4 flex-1 ">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:mt-0 mt-5">
                        {filteredProducts.map(product => (
                            <div key={product.product_id} className="bg-white rounded-lg shadow-lg p-4">
                                <img src={product.product_image} alt={product.product_title} className="mx-auto h-[220px] rounded-lg mb-4" />
                                <h3 className="text-xl font-bold mb-2">{product.product_title}</h3>
                                <p className="text-gray-600 mb-2">{product.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-xl font-bold text-[#9538E2]">${product.price}</span>
                                    <Link to={`/product/${product.product_id}`} className="bg-[#9538E2] text-white px-4 py-2 rounded-lg hover:bg-opacity-90">View Details</Link>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;
