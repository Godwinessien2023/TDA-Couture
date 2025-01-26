import React, { useState, useEffect } from "react";
import { getProductApi } from "../api"; // Make sure this path matches your actual file structure

const ProductSearch = () => {
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  // Fetch all products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = await getProductApi(); // Using getProductApi instead of axios
        setProducts(productData);
        setSearchResults(productData);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products. Please try again later.");
      }
    };

    fetchProducts();
  }, []);

  // Function to format price in Naira
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter products by name (case-insensitive)
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );

    setSearchResults(filtered); // Update search results
  };

  return (
    <div className="product-search-wrapper py-5">
      <div className="container-xxl">
        <h3 className="mb-4 title">Search Products</h3>

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by product name"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        {/* Error Message */}
        {error && <div className="alert alert-danger">{error}</div>}

        {/* Product Results */}
        <div className="row">
          {searchResults.length > 0 ? (
            searchResults.map((product) => (
              <div key={product._id} className="col-md-4 mb-3">
                <div className="card">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">
                      <strong>Price:</strong> {formatPrice(product.price)}
                    </p>
                    <p className="card-text">
                      <strong>Quantity:</strong> {product.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products found for "{searchTerm}"</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
