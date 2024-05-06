import React, { useState } from "react";

function PlaceAdd() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    amenities: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada form verilerini işleyebilirsiniz, örneğin API'ye gönderebilirsiniz
    console.log(formData);
  };

  return (
    <div>
      <h2>Add a Place</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Amenities:</label>
          <input
            type="text"
            name="amenities"
            value={formData.amenities}
            onChange={(e) =>
              setFormData({ ...formData, amenities: e.target.value.split(",") })
            }
            required
          />
        </div>
        <button type="submit">Add Place</button>
      </form>
    </div>
  );
}

export default PlaceAdd;
