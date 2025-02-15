import React, { useState } from "react";
import { addCategoryApi } from "../api";

const Addcat = () => {
  const [categoryName, setCategoryName] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    setCategoryName(e.target.value);
    if (e.target.value.trim() === "") {
      setError("Category Name is Required");
    } else {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (categoryName.trim() === "") {
      setError("Category Name is Required");
      return;
    }

    try {
      const response = await addCategoryApi({ name: categoryName });

      if (response.status === 201) {
        setSuccessMessage("Category added successfully!");
        setCategoryName("");
        setError("");
      } else {
        setError("Failed to add category. Unexpected response.");
      }
    } catch (err) {
      const apiErrorMessage =
        err.response?.data?.message || "An error occurred. Please try again.";
      setError(apiErrorMessage);
      console.error("Error adding category:", err);
    }
  };

  return (
    <div className="addcat-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div>
            <h3 className="mb-4 title">Add Category</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="category">Enter Product Category</label>
                <input
                  type="text"
                  id="category"
                  className="form-control"
                  value={categoryName}
                  onChange={handleInputChange}
                />
                {error && (
                  <div className="error" style={{ color: "red" }}>
                    {error}
                  </div>
                )}
                {successMessage && (
                  <div className="success" style={{ color: "green" }}>
                    {successMessage}
                  </div>
                )}
              </div>
              <button
                className="btn btn-success border-0 rounded-3 my-5"
                type="submit"
              >
                Add Category
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addcat;
