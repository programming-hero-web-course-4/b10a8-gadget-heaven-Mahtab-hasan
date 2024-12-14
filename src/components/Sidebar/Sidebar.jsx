import React, { useState } from 'react';
const Sidebar = ({ onSelectCategory }) => {
    const [message, setMessage] = useState('');
    const categories = [
        { id: 1, name: 'All Products' },
        { id: 2, name: 'Laptops' },
        { id: 3, name: 'Phones' },
        { id: 4, name: 'Accessories' },
        { id: 5, name: 'Smartwatches' },
        { id: 6, name: 'electric cable' }
    ]
    const handleCategorySelect = (category) => {

        if (category.name === 'electric cable') {
            setMessage('No data found for electric cable');
        }
        else {
            setMessage('');
            onSelectCategory(category.name === 'All Products' ? 'all' : category.name)
        }
    };
    return (
        <div className="w-full h-[500px] md:w-64 bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <ul className="space-y-2">
                {categories.map(category => (
                    <li key={category.id}>
                        <button 
                        onClick={() => handleCategorySelect(category)}
                        className={`w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100`}>
                            {category.name}
                        </button>
                    </li>
                ))}
            </ul>
            {message && <div className="mt-4 text-xl text-[#ff0f37]">{message}</div>}
        </div>
    );
};
export default Sidebar;
