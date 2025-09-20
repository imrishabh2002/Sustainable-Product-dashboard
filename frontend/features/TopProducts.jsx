import React from "react";
import { useGetTopProductsQuery } from "./productsApi";
import { motion } from "framer-motion";

export default function TopProducts() {
  const { data, isLoading } = useGetTopProductsQuery();

  if (isLoading)
    return (
      <p style={{ textAlign: "center", padding: "12px", fontSize: "16px" }}>
        Loading...
      </p>
    );

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        padding: "16px",
      }}
    >
      <h3
        style={{
          fontSize: "18px",
          fontWeight: "600",
          marginBottom: "12px",
          color: "#16a34a",
          textAlign: "center",
        }}
      >
        🌟 Top Sustainable Products
      </h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {data?.map((product, index) => (
          <motion.li
            key={product._id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            style={{
              backgroundColor: "#f9fafb",
              marginBottom: "10px",
              padding: "10px 14px",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "15px",
            }}
          >
            <span style={{ fontWeight: "500", color: "#374151" }}>
              {product.name}
            </span>
            <span
              style={{
                backgroundColor: "#dcfce7",
                color: "#16a34a",
                padding: "4px 10px",
                borderRadius: "999px",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              {product.sustainabilityScore}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
