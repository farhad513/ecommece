import React from "react";
import { Link } from "react-router-dom";
const BlogCard = (props) => {
  return (
    <>
      <div className="col-3">
        <div className="blog_card pb-3">
          <div className="card_image">
            <img src={props.img} className="img-fluid" alt="blog img" />
          </div>
          <div className="card_content ps-3 py-2">
            <h6 className="date text-dark">12 jan 2023</h6>
            <p className="title  fs-3 fw-bold">A Beautiful Morning</p>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque amet nisi commodi perferendis praesentium quas aperiam
              animi aut, ut tempora!
            </p>
            <Link className="button">Read More</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
