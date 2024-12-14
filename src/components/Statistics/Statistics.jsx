import React from 'react';
import useDocumentTitle from '../hook/useDocumentTitle';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Statistics = () => {

    useDocumentTitle('Statistics');
    const [skipAnimation, setSkipAnimation] = React.useState(false);
    const [visibleSeries, setVisibleSeries] = React.useState(6);
    const data = [
        {
            name: 'Laptops',
            Sales: 4000,
            Stock: 2400,
            Reviews: 2400,
            Revenue: 8000,
            Returns: 400,
            Ratings: 4.5,
        },
        {
            name: 'Phones',
            Sales: 3000,
            Stock: 1398,
            Reviews: 2210,
            Revenue: 6000,
            Returns: 300,
            Ratings: 4.2,
        },
        {
            name: 'Accessories',
            Sales: 2000,
            Stock: 9800,
            Reviews: 2290,
            Revenue: 3000,
            Returns: 200,
            Ratings: 4.7,
        },
        {
            name: 'Smartwatches',
            Sales: 2780,
            Stock: 3908,
            Reviews: 2000,
            Revenue: 5500,
            Returns: 150,
            Ratings: 4.3,
        },
    ];






    return (




        <div className='container mx-auto p-4'>
            <h2 className='text-3xl font-bold text-center mb-8'>Gadget Statistics</h2>
            <div className='bg-white p-6 rounded-lg shadow-lg mb-8'>
                <h3 className='text-xl font-semibold mb-4'>Product Performance Overview</h3>
                <div className='w-full h-[400px]'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5, }} animationDuration={skipAnimation ? 0 : 1000}>
                            <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                            <XAxis dataKey="name"></XAxis>
                            <YAxis></YAxis>
                            <Tooltip></Tooltip>
                            <Legend></Legend>
                            {visibleSeries >= 1 && <Bar dataKey="Sales" fill="#8884d8" />}
                            {visibleSeries >= 2 && <Bar dataKey="Stock" fill="#82ca9d" />}
                            {visibleSeries >= 3 && <Bar dataKey="Reviews" fill="#ffc658" />}
                            {visibleSeries >= 4 && <Bar dataKey="Revenue" fill="#ff7300" />}
                            {visibleSeries >= 5 && <Bar dataKey="Returns" fill="#ff0000" />}
                            {visibleSeries >= 6 && <Bar dataKey="Ratings" fill="#00C49F" />}
                        </BarChart>
                    </ResponsiveContainer>
                </div>






                <div className='mt-4 flex items-center gap-4'>

                    <label className="flex items-center gap-2">
                        <input type="checkbox" checked={skipAnimation} onChange={(e) => setSkipAnimation(e.target.checked)} className="form-checkbox" />
                        Skip Animation
                    </label>



                    <div className="flex items-center gap-2">
                        <span>Visible Series:</span>
                        <input type="range" min={1} max={6} value={visibleSeries} onChange={(e) => setVisibleSeries(Number(e.target.value))} className="form-range" />
                        <span>{visibleSeries}</span>
                    </div>

                </div>
            </div>






            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

                <div className='bg-white p-6 rounded-lg shadow-lg'>
                    <h3 className='text-xl font-semibold mb-2'>Total Products</h3>
                    <p className='text-3xl font-bold text-[#9538E2]'>156</p>
                </div>
                <div className='bg-white p-6 rounded-lg shadow-lg'>
                    <h3 className='text-xl font-semibold mb-2'>Total Sales</h3>
                    <p className='text-3xl font-bold text-[#9538E2]'>1,234</p>
                </div>
                <div className='bg-white p-6 rounded-lg shadow-lg'>
                    <h3 className='text-xl font-semibold mb-2'>Total Revenue</h3>
                    <p className='text-3xl font-bold text-[#9538E2]'>45,678</p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;