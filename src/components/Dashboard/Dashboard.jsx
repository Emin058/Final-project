import React from "react";
import styles from "./Dashboard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RemoveBlog } from "../../redux/Actions/Actions";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const blogs = useSelector((state) => state.BlogReducer);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className="container">
        <Link style={{marginTop:"10px"}} to="/addBlog" className="btn btn-success">
          Add new blog
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>

              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((item) => {
              return (
                <>
                  <tr>
                    <th scope="row">{item.id}</th>
                    <td>
                      <img className={styles.image} src={item.imageUrl} />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>

                    <td>
                      <button style={{marginRight:"15px"}}
                        onClick={() => dispatch(RemoveBlog(item.id))}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                      <Link
                        to={`/editBlog/${item.id}`}
                        className="btn btn-warning"
                      >
                        Edit Blog
                      </Link>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
