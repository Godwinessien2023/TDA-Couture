import React, { useState } from "react";

const Addcat = () => {
  const [categoryName, setCategoryName] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setCategoryName(e.target.value);
    if (e.target.value.trim() === "") {
      setError("Category Name is Required");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoryName.trim() === "") {
      setError("Category Name is Required");
      return;
    }
    console.log("Category Submitted: ", categoryName);
    setCategoryName("");
  };

  return (
    <>
      <div className="addcat-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div>
              <h3 className="mb-4 title">Add Category</h3>
              <div>
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
      </div>
    </>
  );
};

export default Addcat;
