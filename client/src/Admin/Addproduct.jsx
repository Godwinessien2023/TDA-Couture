import React, { useState, useEffect } from "react";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { addProductApi, getCategoryApi } from "../api";

const Addproduct = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
    image: "",
  });
  const [categories, setCategories] = useState([]); // Categories state
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSelectChange = (value, name) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formValues.name) newErrors.name = "Name is Required";
    if (!formValues.description)
      newErrors.description = "Description is Required";
    if (!formValues.price) newErrors.price = "Price is Required";
    if (!formValues.quantity) newErrors.quantity = "Quantity is Required";
    if (!formValues.category) newErrors.category = "Category is Required";
    if (!formValues.image) newErrors.image = "Image URL is Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const parser = new DOMParser();
      const strippedDescription =
        parser.parseFromString(formValues.description, "text/html").body
          .textContent || "";

      const productData = {
        name: formValues.name,
        description: strippedDescription,
        price: formValues.price,
        quantity: formValues.quantity,
        category: formValues.category,
        image: formValues.image,
      };

      try {
        const response = await addProductApi(productData);

        setSuccessMessage("Product added successfully!");
        console.log("API Response:", response);

        setFormValues({
          name: "",
          description: "",
          price: "",
          quantity: "",
          category: "",
          image: "",
        });
      } catch (error) {
        console.error("Error adding product:", error);
        setErrors({ api: "Failed to add product. Please try again." });
      }
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategoryApi();
        setCategories(response); // Update state with fetched categories
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        setErrors({ api: "Failed to fetch categories. Please try again." });
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      <div className="addproduct-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div>
              <h3 className="mb-4 title">Add Product</h3>
              <div>
                {successMessage && (
                  <div className="alert alert-success">{successMessage}</div>
                )}
                {errors.api && (
                  <div className="alert alert-danger">{errors.api}</div>
                )}
                <form
                  onSubmit={handleSubmit}
                  className="d-flex gap-3 flex-column"
                >
                  <CustomInput
                    type="text"
                    label="Enter Product Name"
                    name="name"
                    onChng={handleInputChange}
                    val={formValues.name}
                  />
                  <div className="error">{errors.name}</div>

                  <ReactQuill
                    theme="snow"
                    name="description"
                    value={formValues.description}
                    onChange={(value) =>
                      handleSelectChange(value, "description")
                    }
                  />
                  <div className="error">{errors.description}</div>

                  <CustomInput
                    type="number"
                    label="Enter Product Price"
                    name="price"
                    onChng={handleInputChange}
                    val={formValues.price}
                  />
                  <div className="error">{errors.price}</div>

                  <select
                    name="category"
                    onChange={handleInputChange}
                    value={formValues.category}
                    className="form-control py-3 mb-3"
                  >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  <div className="error">{errors.category}</div>

                  <CustomInput
                    type="number"
                    label="Enter Product Quantity"
                    name="quantity"
                    onChng={handleInputChange}
                    val={formValues.quantity}
                  />
                  <div className="error">{errors.quantity}</div>

                  <CustomInput
                    type="text"
                    label="Enter Image URL"
                    name="image"
                    onChng={handleInputChange}
                    val={formValues.image}
                  />
                  <div className="error">{errors.image}</div>

                  <button
                    className="btn btn-success border-0 rounded-3 my-5"
                    type="submit"
                  >
                    Add Product
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

export default Addproduct;
