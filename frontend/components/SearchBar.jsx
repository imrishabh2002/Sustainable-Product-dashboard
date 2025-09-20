import React, { useState } from 'react';

export default function SearchBar({ setSearch, setCategory }) {
  const [input, setInput] = useState('');

  const handleSearch = (e) => {
    setInput(e.target.value);
    const debounce = setTimeout(() => setSearch(e.target.value), 500);
    return () => clearTimeout(debounce);
  };

  return (
    <div className="card">
      <input
        type="text"
        placeholder="Search products..."
        value={input}
        onChange={handleSearch}
      />
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
        <option value="Personal Care">Personal Care</option>
        <option value="Stationery">Stationery</option>
        <option value="Footwear">Footwear</option>
      </select>
    </div>
  );
}
