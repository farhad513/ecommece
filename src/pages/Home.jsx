import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
const Home = () => {
  return (
    <>
      <section className="home-wrapper px-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <div className="main_banner p-3 position-relative p-3">
                <img
                  src="images/main-banner.jpg"
                  alt="banner Images "
                  className="img-fluid rounded-2"
                />
                <div className="main_banner_content position-absolute text-white">
                  <h4>SUPER FOR SALE</h4>
                  <h5>ipad s14+ Pro.</h5>
                  <p>From $100.00 or $20.00</p>
                  <Link className="button">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="sm_banner p-3 position-relative p-3">
                  <img
                    src="images/catbanner-01.jpg"
                    alt="banner Images "
                    className="img-fluid rounded-2"
                  />
                  <div className="sm_banner_content position-absolute text-white">
                    <h4>SUPER FOR SALE</h4>
                    <h5>ipad s14+ Pro.</h5>
                    <p>From $100.00 or $20.00</p>
                  </div>
                </div>
                <div className="sm_banner p-3 position-relative p-3">
                  <img
                    src="images/catbanner-02.jpg"
                    alt="banner Images "
                    className="img-fluid rounded-2"
                  />
                  <div className="sm_banner_content position-absolute text-white">
                    <h4>Best SALE</h4>
                    <h5>Apple Watch</h5>
                    <p>From $150.00 or $75.00</p>
                  </div>
                </div>
                <div className="sm_banner p-3 position-relative p-3">
                  <img
                    src="images/catbanner-03.jpg"
                    alt="banner Images "
                    className="img-fluid rounded-2"
                  />
                  <div className="sm_banner_content position-absolute text-white">
                    <h4>SUPER FOR SALE</h4>
                    <h5>ipad Tablets</h5>
                    <p>From $500.00 or $350.00</p>
                  </div>
                </div>
                <div className="sm_banner p-3 position-relative p-3">
                  <img
                    src="images/catbanner-04.jpg"
                    alt="banner Images "
                    className="img-fluid rounded-2"
                  />
                  <div className="sm_banner_content position-absolute text-white">
                    <h4>SUPER FOR SALE</h4>
                    <h5>Airphones</h5>
                    <p>From $80.00 or $50.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5 mt-3">
        <div className="container-fluid py-3 px-5">
          <div className="row px-5">
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-between ">
                <div className="d-flex align-items-center gap-15">
                  <img
                    src="images/service.png"
                    className="mb-3"
                    alt=""
                    width={50}
                  />
                  <div>
                    <h4>Free Shopping</h4>
                    <p>From all orders over $100</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img
                    src="images/service-02.png"
                    className="mb-3"
                    alt=""
                    width={50}
                  />
                  <div>
                    <h4>Dailly Serpise Offer</h4>
                    <p>save up 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img
                    src="images/service-03.png"
                    className="mb-3"
                    alt=""
                    width={50}
                  />
                  <div>
                    <h4>Support 24/7</h4>
                    <p>Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img
                    src="images/service-04.png"
                    className="mb-3"
                    alt=""
                    width={50}
                  />
                  <div>
                    <h4>Affordable Prices</h4>
                    <p>Get Factory direct price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img
                    src="images/service-05.png"
                    className="mb-3"
                    alt=""
                    width={50}
                  />
                  <div className="">
                    <h4>Secure Payments</h4>
                    <p>100% Protected payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-3 py-5 mt-3 ">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-12 px-5">
              <div className=" d-flex align-items-center categories justify-content-between">
                <div className="d-flex align-items-center gap-40  ps-5">
                  <div className="">
                    <h5>Cameras</h5>
                    <p>20 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center gap-40  ps-5">
                  <div>
                    <h5>Smart Watch</h5>
                    <p>15 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="watch" />
                </div>
                <div className="d-flex align-items-center gap-40  ps-5">
                  <div>
                    <h5>Smart Speaker</h5>
                    <p>10 Items</p>
                  </div>
                  <img src="images/speaker.jpg" alt="speaker" />
                </div>
                <div className="d-flex align-items-center gap-40  ps-5">
                  <div>
                    <h5>Laptop</h5>
                    <p>20 Items</p>
                  </div>
                  <img src="images/laptop.jpg" alt="laptop" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Marque Wrapper */}
      <section className="marquee-wrapper py-5">
        <div className="container-fluid px-5">
          <div className="row">
            <div className="col-12">
              <div className="marquee_inner_wrapper gap-10 card_wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="Brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="Brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="Brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="Brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="Brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="Brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="Brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog_wrapper home-wrapper-2 py-5 px-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h3 className="text-center py-4 fs-1">Featured Collection</h3>
            </div>
            <ProductCard img="images/blog-1.jpg" />
            <ProductCard img="images/blog-1.jpg" />
            <ProductCard img="images/blog-1.jpg" />
            <ProductCard img="images/blog-1.jpg" />
            <ProductCard img="images/blog-1.jpg" />
            <ProductCard img="images/blog-1.jpg" />
          </div>
        </div>
      </section>
      {/* Blog Part */}
      <section className="blog_wrapper home-wrapper-2 py-5 px-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h3 className="text-center py-4 fs-1">Our Latest News</h3>
            </div>
            <BlogCard img="images/blog-1.jpg" />
            <BlogCard img="images/blog-1.jpg" />
            <BlogCard img="images/blog-1.jpg" />
            <BlogCard img="images/blog-1.jpg" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
