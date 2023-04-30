import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ProductCard = (props) => {
  return (
    <>
      <div className="col-3">
        <div className="product_card pb-3 position-relative">
          <div className="card_image">
            <img src={props.img} className="img-fluid" alt="blog img" />
          </div>
          <div className="product_details">
            <h6 className="brand">Havels</h6>
            <h5 className="product_title">
              Sankars world class auto open umbrella (8 sik) Black
            </h5>
            <ReactStars count={5} value={3} size={24} activeColor="#ffd700" />,
            <p className="price">$100.00</p>
          </div>
          <div className="action_top position-absolute">
            <div className="d-flex flex-colmun">
              <Link>
                <img src="images/cross.svg" alt="Comapre" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="View" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
