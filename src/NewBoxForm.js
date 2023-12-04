import React, { useState } from 'react';

function NewBoxForm({ addBox }) {
  // Initial state for form inputs
  const [formData, setFormData] = useState({
    width: '',
    height: '',
    backgroundColor: ''
  });

  // Function to generate a unique ID
  const uniqueId = () => {
    return Math.floor(Math.random() * 10000);
  };

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault();
    addBox({ ...formData, id: uniqueId() });
    setFormData({ width: '', height: '', backgroundColor: '' });
  };

  // Handle changes in form inputs
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        name="width"
        value={formData.width}
        onChange={handleChange}
        placeholder="Width"
      />
      <input 
        type="text"
        name="height"
        value={formData.height}
        onChange={handleChange}
        placeholder="Height"
      />
      <input 
        type="text"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
        placeholder="Background Color"
      />
      <button type="submit">Add a new box</button>
    </form>
  );
}

export default NewBoxForm;
