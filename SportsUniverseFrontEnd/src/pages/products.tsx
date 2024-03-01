import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./products.css"
import TopBar from "./components/topbar.tsx";




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
const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');
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

    function filterProducts() {
        let filteredProducts = products;

        if (selectedCategory) {
            filteredProducts = filteredProducts.filter((product) => product.category === selectedCategory);
        }

        if (searchQuery) {
            filteredProducts = filteredProducts.filter((product) =>
                product.productName.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        return filteredProducts;
    }

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

    return (
        <>

            <TopBar/>
            <div className="bg-pro">
                <div className="categories">
                    <button className="cteg-btn" onClick={() => setSelectedCategory('Dumbbells')}>Dumbbells</button>
                    <button className="cteg-btn" onClick={() => setSelectedCategory('Treadmill')}>Treadmill</button>
                    <button className="cteg-btn" onClick={() => setSelectedCategory('Home Gyms')}>Home Gyms</button>
                    <button className="cteg-btn" onClick={() => setSelectedCategory('Jump Ropes')}>Jump Ropes
                    </button>
                    <button className="cteg-btn" onClick={() => setSelectedCategory('Exercise Bikes')}>Exercise
                        Bikes
                    </button>
                    <button className="cteg-btn" onClick={() => setSelectedCategory('Rowing Machines')}>Rowing
                        Machines
                    </button>
                    <button className="cteg-btn" onClick={() => setSelectedCategory('Pull Up and Push Up Bar')}>Pull
                        Up and Push Up Bar
                    </button>
                    <button className="cteg-btn"
                            onClick={() => setSelectedCategory('Core and Abdominal Trainers')}>Core and Abdominal
                        Trainers
                    </button>
                    <button className="cteg-btn" onClick={() => setSelectedCategory(null)}>All</button>
                </div>

                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-inp"/>

                <div className="pro-dis" style={{display: 'flex', flexWrap: 'wrap', width: '70%', color: 'black'}}>
                    {filterProducts().map((product) => (
                        <ProductCard key={product.id} product={product} onViewClick={handleViewClick}/>
                    ))}
                </div>
            </div>

        </>
    );
};


export default Products;