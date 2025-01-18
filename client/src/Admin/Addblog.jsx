import React from "react";
import CustomInput from "../components/CustomInput";
import Dropzone from "react-dropzone";

const Addblog = () => {
  return (
    <>
      <div className="addblog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div>
              <h3 className="mb-4 title">Blog</h3>
              <div className="">
                <form action="">
                  {/* Blog Title Input */}
                  <div className="mt-4">
                    <CustomInput
                      type="text"
                      label="Enter Blog Title"
                      name="title"
                      onChng={(e) => console.log("Title:", e.target.value)}
                      onBlr={() => console.log("Title blurred")}
                      val={""} // Replace with controlled state
                    />
                  </div>

                  {/* Blog Category Dropdown */}
                  <select
                    name="category"
                    className="form-control py-3 mt-3"
                    id="category"
                    onChange={(e) => console.log("Category:", e.target.value)}
                  >
                    <option value="">Select Blog Category</option>
                    <option value="Tech">Caps</option>
                    <option value="Lifestyle">Kaftans</option>
                    <option value="Lifestyle">Suites</option>
                  </select>

                  {/* Blog Description */}
                  <textarea
                    name="description"
                    id="description"
                    className="form-control mt-3"
                    placeholder="Enter Blog Description"
                    rows={5}
                    onChange={(e) =>
                      console.log("Description:", e.target.value)
                    }
                  ></textarea>

                  {/* Dropzone for File Upload */}
                  <div className="dropzone-container bg-white border p-4 text-center mt-3">
                    <Dropzone
                      onDrop={(acceptedFiles) =>
                        console.log("Files:", acceptedFiles)
                      }
                    >
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
                              Drag & drop some files here, or click to select
                              files
                            </p>
                            <button
                              type="button"
                              className="btn btn-primary mt-2"
                            >
                              Browse Files
                            </button>
                          </div>
                        </section>
                      )}
                    </Dropzone>
                  </div>

                  {/* Uploaded Images Preview */}
                  <div className="uploaded-images d-flex flex-wrap mt-3 gap-3">
                    {/* Example placeholder for images */}
                    <div className="position-relative">
                      <img
                        src="https://via.placeholder.com/200"
                        alt="Uploaded File"
                        className="img-thumbnail"
                        width={200}
                        height={200}
                      />
                      <button
                        type="button"
                        className="btn-close position-absolute"
                        style={{ top: "10px", right: "10px" }}
                        onClick={() => console.log("Remove Image")}
                      ></button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    className="btn btn-success border-0 rounded-3 my-5"
                    type="submit"
                  >
                    Add Blog
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

export default Addblog;
