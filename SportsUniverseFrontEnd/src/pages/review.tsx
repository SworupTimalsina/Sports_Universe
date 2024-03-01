import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './review.css';
import TopBar from "./components/topbar.tsx";

interface ItemDTO {
    itemId: number;
    productName: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
}

interface ReviewPageProps {}

const Review: React.FC<ReviewPageProps> = () => {
    const { productId } = useParams<{ productId?: string }>();
    const selectedProductId: number | null = productId ? parseInt(productId, 10) : null;

    const navigate = useNavigate();
    const [itemDTO, setItemDTO] = useState<ItemDTO | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [showBill, setShowBill] = useState(false);

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                if (selectedProductId !== null && !isNaN(selectedProductId)) {
                    const response = await fetch(`http://localhost:8080/item/getById/${selectedProductId}`);
                    if (response.ok) {
                        const data: ItemDTO = await response.json();
                        setItemDTO(data);
                        console.log('Image URL:', data.imageUrl);
                    } else {
                        console.error('Error fetching product data:', response.status);
                    }
                }
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchProductData();
    }, [selectedProductId]);

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = parseInt(e.target.value, 10) || 1;
        setQuantity(newQuantity);
    };

    const handleBuyClick = async () => {
        setShowBill(true);
        // try {
        //     const response = await fetch('http://localhost:8080/order/create', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             productName: itemDTO?.productName,
        //             price: itemDTO?.price,
        //             quantity: quantity,
        //             total: (itemDTO?.price || 0) * quantity,
        //         }),
        //     });
        //
        //     if (response.ok) {
        //
        //     } else {
        //         console.error('Error processing purchase:', response.status);
        //     }
        // } catch (error) {
        //     console.error('Error processing purchase:', error);
        // }
    };

    const handleConfirmClick = async () => {
        try {
            const response = await fetch('http://localhost:8080/order/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productName: itemDTO?.productName,
                    price: itemDTO?.price,
                    quantity: quantity,
                    total: (itemDTO?.price || 0) * quantity,
                }),
            });

            if (response.ok) {
                alert('Purchase successful!');
                navigate('/products');
            } else {
                console.error('Error processing purchase:', response.status);
            }
        } catch (error) {
            console.error('Error processing purchase:', error);
        }
    };
    return (
        <body className="reviewbody">
        <TopBar />
        <div className="page-body">
            <div className="image">
                <img src={itemDTO?.imageUrl} width="400" height="400" alt={itemDTO?.productName} className="img-prod" />
            </div>

            <div className="change-page">
                <div className="sliding-page">
                    {itemDTO && (
                        <div className="details">
                            <h2>{itemDTO.productName}</h2>
                            <label>Rs. {itemDTO.price}</label>
                            <p style={{ marginLeft: "100px" }}>
                                Description: <br />
                                {itemDTO.description}
                            </p>
                            <label>
                                Quantity:
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                    min="1"
                                />
                            </label>

                            <button
                                className="buy-bot"
                                style={{ width: "90px", backgroundColor: "red", marginLeft: "300px", marginTop: "20px" }}
                                onClick={handleBuyClick}
                            >
                                Buy
                            </button>
                        </div>
                    )}
                </div>
            </div>
            {showBill && (
                <>
                    <div className="overlay"></div>
                    <div className="bill-popup">
                        <div className="bill-content">
                            <h3>Bill Summary</h3>
                            <p>Product: {itemDTO?.productName}</p>
                            <p>Quantity: {quantity}</p>
                            <p>Total: Rs. {(itemDTO?.price || 0) * quantity}</p>
                            <button onClick={handleConfirmClick}>Confirm</button>
                        </div>
                    </div>
                </>
            )}
        </div>
        </body>
    );
};

export default Review;
