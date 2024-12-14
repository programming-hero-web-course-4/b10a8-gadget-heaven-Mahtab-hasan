import { Link } from 'react-router-dom';


const ProductGrid = ({ products }) => {
    return (
        // product grid
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
                    <div key={product.product_id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src={product.product_image} alt={product.product_title} className="w-full h-auto object-cover" />

                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2">{product.product_title}</h3>

                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xl font-bold text-[#9538E2]">
                                    ${product.price}
                                </span>
                                <div className="flex items-center">
                                    <span className="text-yellow-400">★</span>
                                    <span className="ml-1">{product.rating}</span>
                                </div>
                            </div>
                            <Link to={`/product/${product.product_id}`} className="block w-full text-center bg-[#9538E2] text-white py-2 rounded-lg hover:bg-opacity-90 transition-all">
                            Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ProductGrid;