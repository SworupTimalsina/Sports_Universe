import React, { useState } from 'react';
import './adminpanel.css';

const UpdatePro: React.FC = () => {
  const [productId, setId] = useState(0);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  const handleSearchClick = () => {
    const itemName = name;
    fetch(`http://localhost:8080/item/getByName/${itemName}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Failed to fetch item. Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          setId(data.productId);
          setName(data.productName);
          setPrice(data.price);
          setCategory(data.category);
          setDescription(data.description);
          setImageUrl(data.imageUrl);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          // Optionally, handle 404 responses or other errors here
        });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'imageUrl') {
      setImageUrl(e.target.value);
    } else {
      setPrice(Number(e.target.value));
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value);
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value);

  const handleUpdateClick = () => {
    const updatedData = {
      productId: productId,
      productName: name,
      price: price,
      category: category,
      description: description,
      imageUrl: imageUrl,
    };


    fetch(`http://localhost:8080/item/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Failed to update item. Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {

          console.log('Update successful:', data);
        })
        .catch(error => {
          console.error('Error updating data:', error);
        });
  };

  return (
      <>
        <div className="addupdel-bg">
          <div className="add-holder">
            <div className="name-div">
              <label>Name:</label>
              <input
                  style={{ width: 600, backgroundColor: "white", color: "black", height: 30, borderColor:'white', marginLeft:47}}
                  value={name}
                  onChange={handleNameChange}
              />
              <button onClick={handleSearchClick}>Search</button>
            </div>

            <div className="pri-cat">
              <label>Price:</label>
              <div className="proro">
                <input
                    style={{ width: 250, backgroundColor: "white", color: "black" ,height: 30, borderColor:'white', marginLeft:55}}
                    value={price}
                    onChange={handlePriceChange}
                />
                <label style={{marginLeft:20}}>Category:</label>
                <select
                    style={{ width: 225, backgroundColor: "white", color: "black" ,height: 30, borderColor:'white', marginLeft:15}}
                    value={category}
                    onChange={handleCategoryChange}
                >
                  <option>Dumbbells</option>
                  <option>Treadmill</option>
                  <option>Home Gyms</option>
                  <option>Jump Ropes</option>
                  <option>Exercise Bikes</option>
                  <option>Rowing Machines</option>
                  <option>Pull Up and Push Up Bar</option>
                  <option>Core and Abdominal Trainers</option>
                </select>
              </div>
            </div>
            <div className="des-div">
              <label>Description:</label>
              <input
                  style={{ width: 600, height: 250, backgroundColor: "white", color: "black", borderColor:'white'}}
                  value={description}
                  onChange={handleDescriptionChange}
              />
            </div>
            <div className="img-boxx" style={{display:"flex", }}>
              <label>Image URL:</label>
              <input
                  style={{ width: 600, backgroundColor: "white", color: "black", height: 30, borderColor:'white', marginLeft:28 }}
                  name="imageUrl"
                  value={imageUrl}
                  onChange={handlePriceChange}
              />
            </div>
            <button className="add-pro-btn" onClick={handleUpdateClick}>Update</button>

          </div>
        </div>
      </>
  );
};

export default UpdatePro;