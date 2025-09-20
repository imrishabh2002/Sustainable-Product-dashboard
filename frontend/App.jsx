import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProductList from "./features/ProductList";
import AddProductForm from "./features/AddProductForm";
import TopProducts from "./features/TopProducts";

export default function App() {
  return (
    <Router>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#f9fafb",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Navbar */}
        <motion.nav
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            backgroundColor: "#16a34a",
            color: "white",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px 16px",
            }}
          >
            <Link
              to="/"
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                textDecoration: "none",
                color: "white",
              }}
            >
              🌱 Sustainable Dashboard
            </Link>
            <Link
              to="/add-product"
              style={{
                backgroundColor: "white",
                color: "#16a34a",
                padding: "8px 16px",
                borderRadius: "8px",
                fontWeight: "500",
                textDecoration: "none",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#dcfce7")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
            >
              + Add Product
            </Link>
          </div>
        </motion.nav>

        {/* Routes */}
        <main
          style={{
            flexGrow: 1,
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "24px 16px",
          }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "24px",
                  }}
                >
                  <div>
                    <ProductList />
                  </div>
                  <aside
                    style={{
                      backgroundColor: "white",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                      borderRadius: "12px",
                      padding: "16px",
                    }}
                  >
                    <h2
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        marginBottom: "12px",
                      }}
                    >
                      Top Products
                    </h2>
                    <TopProducts />
                  </aside>
                </div>
              }
            />
            <Route path="/add-product" element={<AddProductForm />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer
          style={{
            backgroundColor: "#16a34a",
            color: "white",
            padding: "12px",
            textAlign: "center",
            marginTop: "auto",
          }}
        >
          © {new Date().getFullYear()} Eco-Friendly Dashboard 🌍
        </footer>
      </div>
    </Router>
  );
}
