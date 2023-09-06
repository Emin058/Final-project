import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { BlogReducer } from "../../redux/Reducers/AppReducer";
import { EditBlogFunc } from "../../redux/Actions/Actions";
const EditBlog = () => {
  const { id } = useParams();

  const blogs = useSelector((state) => state.BlogReducer);

  const detailedBlog = blogs.find((item) => item.id === id);

  const dispatch = useDispatch();

  const [Blog, setBlog] = useState(detailedBlog);

  const handleChange = (e) => {
    setBlog({ ...Blog, [e.target.name]: e.target.value });
  };

  const location = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(EditBlogFunc(Blog));
    location("/blogs");
  };

  return (
    <div>
      <div style={{ height: "70vh" }} className="container mt-5">
        <form onSubmit={submitForm}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              onChange={handleChange}
              value={Blog.title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              name="description"
              onChange={handleChange}
              value={Blog.description}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Image
            </label>
            <input
              type="text"
              className="form-control"
              name="imageUrl"
              onChange={handleChange}
              value={Blog.imageUrl}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            edit blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;
