import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Dropzone from "react-dropzone";

const Addproduct = () => {
  const [images, setImages] = useState([]); // Manage uploaded images
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    quantity: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSelectChange = (value, name) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formValues.title) newErrors.title = "Title is Required";
    if (!formValues.description) newErrors.description = "Description is Required";
    if (!formValues.price) newErrors.price = "Price is Required";
    if (!formValues.category) newErrors.category = "Category is Required";
    if (!formValues.quantity) newErrors.quantity = "Quantity is Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImageUpload = (acceptedFiles) => {
    const updatedImages = [...images, ...acceptedFiles];
    setImages(updatedImages);
  };

  const removeImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Construct the form data for submission
      const formData = new FormData();
      formData.append("title", formValues.title);
      formData.append("description", formValues.description);
      formData.append("price", formValues.price);
      formData.append("category", formValues.category);
      formData.append("quantity", formValues.quantity);

      // Append images to the form data
      images.forEach((image, index) => {
        formData.append(`images[${index}]`, image);
      });

      console.log("Form submitted with data:", formData);
      // Reset the form
      setFormValues({
        title: "",
        description: "",
        price: "",
        category: "",
        quantity: "",
      });
      setImages([]);
    }
  };

  return (
    <>
      <div className="addproduct-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div>
              <h3 className="mb-4 title">Add Product</h3>
              <div>
                <form onSubmit={handleSubmit} className="d-flex gap-3 flex-column">
                  <CustomInput
                    type="text"
                    label="Enter Product Title"
                    name="title"
                    onChng={handleInputChange}
                    val={formValues.title}
                  />
                  <div className="error">{errors.title}</div>

                  <ReactQuill
                    theme="snow"
                    name="description"
                    value={formValues.description}
                    onChange={(value) => handleSelectChange(value, "description")}
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
                    <option value="Category1">Category1</option>
                    <option value="Category2">Category2</option>
                  </select>
                  <div className="error">{errors.category}</div>

                  <CustomInput
                    type="number"
                    label="Enter Product Quantity"
                    name="quantity"
                    onChange={handleInputChange}
                    val={formValues.quantity}
                  />
                  <div className="error">{errors.quantity}</div>

                  <div className="dropzone-container bg-white border p-4 text-center mt-3">
                    <Dropzone onDrop={handleImageUpload}>
                      {({ getRootProps, getInputProps }) => (
                        <section className="dropzone-content">
                          <div
                            {...getRootProps()}
                            className="dropzone-box border rounded p-3"
                            style={{
                              border: "2px dashed #ccc",
                              borderRadius: "8px",
                              cursor: "pointer",
                            }}
                          >
                            <input {...getInputProps()} />
                            <p className="text-muted">
                              Drag & drop some files here, or click to select files
                            </p>
                            <button type="button" className="btn btn-primary mt-2">
                              Browse Files
                            </button>
                          </div>
                        </section>
                      )}
                    </Dropzone>
                  </div>

                  <div className="uploaded-images d-flex flex-wrap mt-3 gap-3">
                    {images.map((image, index) => (
                      <div key={index} className="position-relative">
                        <img
                          src={URL.createObjectURL(image)}
                          alt="Uploaded File"
                          className="img-thumbnail"
                          width={200}
                          height={200}
                        />
                        <button
                          type="button"
                          className="btn-close position-absolute"
                          style={{ top: "10px", right: "10px" }}
                          onClick={() => removeImage(index)}
                        ></button>
                      </div>
                    ))}
                  </div>

                  <button className="btn btn-success border-0 rounded-3 my-5" type="submit">
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
