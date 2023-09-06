import React from 'react';
import styles from "./BlogCard.module.scss"
const BlogCard = (blog) => {
  return (
    <div>
      <div
        className="col-lg-3 col-md-4 col-sm-6 col-12 p-2"
        data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
      >
        <div className={styles.card}>
          <img src={blog.imageUrl} className={styles.cardImage} alt="..." />
          <div className={styles.card_body}>
            <h5 className="card-title"> {blog.title}</h5>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default BlogCard;
