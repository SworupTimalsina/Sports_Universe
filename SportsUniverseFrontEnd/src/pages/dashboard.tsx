import React, {useEffect, useState} from 'react';
import './dashboard.css';
import TopBar from "./components/topbar.tsx";
import BottomBar from "./components/BottomBar.tsx";
import product from "../images/product.png";
import image1 from "../images/o1.png";
import image2 from "../images/o2.png";
import image3 from "../images/o3.png";
import image4 from "../images/o4.png";
import {useNavigate} from "react-router-dom";

interface Product {
    id: number;
    productName: string;
    price: number;
    category: string;
    imageUrl: string;
}

interface ProductCardProps {
    product: Product;
    onViewClick: (data: { productId: number; quantity: number }) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product}) => {
    // const [products, setProducts] = useState<Product[]>([]);

    const navigate = useNavigate();

    // @ts-ignore
    const handleBuyClick = async (product) => {
        try {
            console.log(product)
            // Navigate to the review page with the updated product list
            navigate(`/review/${product.productId}`);
        } catch (error) {
            console.error('Error handling buy click:', error);
        }
    };


    return (
        <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.productName} className="product-image" />
            <p className="product-name">{product.productName}</p>
            <p className="product-price">Price: Rs.{product.price}</p>
            <p className="product-category">Category: {product.category}</p>
            <button className="view-button" onClick={() => handleBuyClick(product)}>View</button>
        </div>
    );
};
const Dashboard: React.FC = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

    const navigate = useNavigate();



    useEffect(() => {
        fetch('http://localhost:8080/item/getAll')
            .then((response) => response.json())
            .then((data: Product[]) => {
                console.log(data);  // Log the data to the console
                setProducts(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);



    const handleViewClick = (data: { productId: number; quantity: number }) => {
        const selectedProduct = products.find((product) => product.id === data.productId);

        if (selectedProduct) {
            setSelectedProductId(data.productId);
            navigate(`/review/${data.productId}`);
        }
    };

    // Use useEffect to navigate after state update
    useEffect(() => {
        // Navigate to the review page when selectedProductId changes
        if (selectedProductId !== null) {
            navigate(`/review/${selectedProductId}`);
        }
    }, [selectedProductId]);


    return(
        <div className="dashboard-container">
            <TopBar/>
            <img src={product} className="dashboard-photo" alt="Product" />
            <div className="divider"></div>
            <div className="category-section">
                <p className="topic">Category</p>
            </div>
            <div className="divider"></div>
            <div className="weoffer-section">
                <p className="topic">What we Offer</p>
                <div className="offer-boxes-container">
                    <div className="offer-box">
                        <img src={image1} alt="Offer 1" className="offer-image" />
                        <p className="offer-topic">Certified Products</p>
                        <p className="offer-description">High-quality, certified sports equipment for athletes at all levels. Ensuring the highest levels of safety, performance, and quality for our customers.</p>
                    </div>
                    <div className="offer-box">
                        <img src={image2} alt="Offer 2" className="offer-image" />
                        <p className="offer-topic">All Sports Equipment Solution</p>
                        <p className="offer-description">Get everything you need to achieve your fitness goals with our comprehensive range of Sports & Fitness equipment solutions, from basic gear to specialized equipment.</p>
                    </div>
                    <div className="offer-box">
                        <img src={image3} alt="Offer 3" className="offer-image" />
                        <p className="offer-topic">Comprehensive Customer Support</p>
                        <p className="offer-description">We're here to assist you every step of the way, from providing product information to technical support and troubleshooting. Our commitment to your satisfaction is unwavering.</p>
                    </div>
                    <div className="offer-box">
                        <img src={image4} alt="Offer 4" className="offer-image" />
                        <p className="offer-topic">Smart Automation Manufacturing</p>
                        <p className="offer-description">Our cutting-edge technology, such as Laser cutting, Powder Coating, Injection Molding, Rubber Compression Molding, VMC, and CNC, guarantees accuracy and productivity in all stages of the manufacturing process.</p>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="newarrivals-section">
                    <p className="topic">New Arrivals</p>
                    <div className="pro-dis" style={{display: 'flex', flexWrap: 'wrap', width: '70%', color: 'black'}}>
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} onViewClick={handleViewClick} />
                        ))}

                    </div>
                </div>
                <div className="divider"></div>
            </div>
            <BottomBar/>
        </div>
    );
};
export default Dashboard;
