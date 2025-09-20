import React, { useState } from "react";
import { useGetProductsQuery } from "./productsApi";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";

export default function ProductList() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetProductsQuery({ search, category, page });

  if (isLoading)
    return (
      <p style={{ textAlign: "center", padding: "20px", fontSize: "18px" }}>
        Loading...
      </p>
    );

  return (
    <div>
      {/* Search bar */}
      <div style={{ marginBottom: "20px" }}>
        <SearchBar setSearch={setSearch} setCategory={setCategory} />
      </div>

      {/* Products Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {data?.products?.map((product, index) => (
          <motion.div
            key={product._id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          marginTop: "24px",
        }}
      >
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          style={{
            backgroundColor: page === 1 ? "#d1d5db" : "#16a34a",
            color: page === 1 ? "#6b7280" : "white",
            padding: "8px 16px",
            borderRadius: "8px",
            fontWeight: "500",
            border: "none",
            cursor: page === 1 ? "not-allowed" : "pointer",
            transition: "0.3s",
          }}
        >
          Prev
        </button>

        <button
          disabled={page * 5 >= data.total}
          onClick={() => setPage(page + 1)}
          style={{
            backgroundColor: page * 5 >= data.total ? "#d1d5db" : "#16a34a",
            color: page * 5 >= data.total ? "#6b7280" : "white",
            padding: "8px 16px",
            borderRadius: "8px",
            fontWeight: "500",
            border: "none",
            cursor:
              page * 5 >= data.total ? "not-allowed" : "pointer",
            transition: "0.3s",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
