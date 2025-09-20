import React, { useState } from "react";
import { useAddProductMutation } from "./productsApi";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function AddProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    sustainabilityScore: 0,
    price: 0,
  });
  const [addProduct, { isLoading }] = useAddProductMutation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProduct(formData);
    setFormData({
      name: "",
      category: "",
      description: "",
      sustainabilityScore: 0,
      price: 0,
    });
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "40px 0",
      }}
    >
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          backgroundColor: "white",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          borderRadius: "16px",
          padding: "32px",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <h2
          style={{
            fontSize: "26px",
            fontWeight: "bold",
            color: "#16a34a",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          Add New Product
        </h2>

        {/* Inputs */}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div>
            <label style={{ fontWeight: "500", color: "#374151" }}>
              Product Name
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Eco Water Bottle"
              required
              style={{
                width: "100%",
                marginTop: "6px",
                padding: "10px 14px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                fontSize: "14px",
              }}
            />
          </div>

          <div>
            <label style={{ fontWeight: "500", color: "#374151" }}>
              Category
            </label>
            <input
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Kitchen"
              required
              style={{
                width: "100%",
                marginTop: "6px",
                padding: "10px 14px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                fontSize: "14px",
              }}
            />
          </div>

          <div>
            <label style={{ fontWeight: "500", color: "#374151" }}>
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Short description..."
              style={{
                width: "100%",
                marginTop: "6px",
                padding: "10px 14px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                fontSize: "14px",
                minHeight: "80px",
              }}
            />
          </div>

          <div>
            <label style={{ fontWeight: "500", color: "#374151" }}>
              Sustainability Score
            </label>
            <input
              type="number"
              name="sustainabilityScore"
              value={formData.sustainabilityScore}
              onChange={handleChange}
              min="0"
              max="100"
              style={{
                width: "100%",
                marginTop: "6px",
                padding: "10px 14px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                fontSize: "14px",
              }}
            />
          </div>

          <div>
            <label style={{ fontWeight: "500", color: "#374151" }}>Price ($)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="20"
              style={{
                width: "100%",
                marginTop: "6px",
                padding: "10px 14px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                fontSize: "14px",
              }}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          style={{
            width: "100%",
            marginTop: "24px",
            backgroundColor: isLoading ? "#9ca3af" : "#16a34a",
            color: "white",
            padding: "12px",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: "600",
            border: "none",
            cursor: isLoading ? "not-allowed" : "pointer",
            transition: "0.3s",
          }}
        >
          {isLoading ? "Adding..." : "Add Product"}
        </button>
      </motion.form>
    </div>
  );
}
