import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { CiHeart } from 'react-icons/ci';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from '../../components/CartContext/CartContext';
import useDocumentTitle from '../hook/useDocumentTitle';



const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart, addToWishlist } = useCart();
    useEffect(() => {
        fetch('/gadgets.json')
            .then(res => res.json())
            .then(data => {
                const foundProduct = data.find(p => p.product_id === id);
                setProduct(foundProduct);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, [id]);
    useDocumentTitle(product ? product.product_title : 'Product Details');
    if (!product) return <div>Loading...</div>;


    return (



        <main className='w-full md:h-[30vh]'>
            <ToastContainer position="top-right"></ToastContainer>


            <div className="container mx-auto px-4 py-8 md:absolute md:top-[38%] md:left-0 right-0">
                <div className="bg-white rounded-3xl shadow-lg p-6 md:mt-0 mt-[-200px]">
                    <div className="md:flex gap-5 w-[100%]">
                        <div className="md:w-1/2">
                            <img src={product.product_image} alt={product.product_title} className="w-full rounded-lg" />
                        </div>
                        <div className="md:w-1/2">
                            <h1 className='text-3xl font-bold mb-4'>{product.product_title}</h1>
                            <p className='text-2xl text-[#9538E2] font-bold mb-4'>Price: ${product.price}</p>
                            <div className="mb-4">
                                <span className='text-green-500'>{product.availability ? 'In Stock' : 'Out of Stock'}</span>
                            </div>
                            <p className='mb-6'>{product.description}</p>
                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-2">Specifications:</h3>
                                <ul className='list-disc pl-5'>
                                    {product.specifications.map((spec, index) => (
                                        <li key={index}>{spec}</li>
                                    ))}
                                    <li>Rating: {product.rating} ⭐⭐⭐</li>
                                    <li>Discount: {product.discount}%</li>
                                </ul>
                            </div>
                            <div className="flex items-center gap-4">
                                <button
                                    className="flex gap-2 items-center bg-[#9538E2] text-white px-8 py-3 rounded-3xl hover:bg-opacity-90 transition-all"
                                    onClick={() => {
                                        addToCart(product);
                                        toast.success(`${product.product_title} has been added to your cart!`);
                                    }}
                                >
                                    Add To Cart <IoCartOutline className='text-2xl'></IoCartOutline>
                                </button>

                                <button
                                    className="border-2 px-2 py-2 rounded-full bg-white"
                                    onClick={() => {
                                        addToWishlist(product);
                                        toast.success(`${product.product_title} has been added to your Wishlist!`, {
                                            style: {
                                                background: '#FFC107',
                                                color: '#000'
                                            }
                                        });
                                    }}
                                >
                                    <CiHeart className="text-3xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProductDetails;