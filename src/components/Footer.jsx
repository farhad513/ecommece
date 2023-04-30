import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsPinterest,
  BsInstagram,
} from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer className="py-3 footer_top">
        <div className="container py-5">
          <div className="row">
            <div className="col-6 d-flex align-items-center gap-10">
              <img src="./images/newsletter.png" alt="" />
              <h3 className="mb-0 fw-bold text-white text-capitalize">
                Signup for newsletter
              </h3>
            </div>
            <div className="col-6">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control input_design input_design_footer"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text" id="basic-addon2">
                  SUBSCRIBE
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4 text-white px-5">
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-3">
              <h3>Contact Us</h3>
              <div className="gap-10">
                <div>
                  <p>Chatkhil, Noakhali,Chittagong Devision </p>
                  <Link className="text-white pt-3" href="tel:+">
                    +88 01518-690471
                  </Link>
                  <br />
                  <Link className="text-white pt-3" href="mailto:">
                    mdfarhadhossain0401@gmail.com
                  </Link>
                </div>
                <div className="py-2 gap-10 ps-2 pt-5">
                  <Link>
                    <BsFacebook className="fs-2 text-white" />
                  </Link>
                  <Link>
                    <BsTwitter className="fs-2 icon_design text-white" />
                  </Link>
                  <Link>
                    <BsLinkedin className="fs-2 icon_design text-white" />
                  </Link>
                  <Link>
                    {" "}
                    <BsPinterest className="fs-2 icon_design text-white" />
                  </Link>
                  <Link>
                    {" "}
                    <BsInstagram className="fs-2 icon_design text-white" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-2">
              <h3>Informations</h3>
              <div className="d-flex flex-column fs-5 gap-10">
                <Link className="text-white">Privacy Policy</Link>
                <Link className="text-white">Refund Policy</Link>
                <Link className="text-white">Shopping Policy</Link>
                <Link className="text-white">Team & Condition</Link>
                <Link className="text-white">Blogs</Link>
              </div>
            </div>
            <div className="col-2">
              <h3>Account</h3>
              <div className="d-flex flex-column fs-5 gap-10">
                <Link className="text-white ">Search</Link>
                <Link className="text-white">About Us</Link>
                <Link className="text-white">Faq</Link>
                <Link className="text-white">Contact</Link>
                <Link className="text-white">Siza Charts</Link>
              </div>
            </div>
            <div className="col-2">
              <h3>Product</h3>
              <div className="d-flex flex-column fs-5 gap-10">
                <Link className="text-white ">Laptop</Link>
                <Link className="text-white">Headphones</Link>
                <Link className="text-white">Smart Watch</Link>
                <Link className="text-white">Tablets</Link>
                <Link className="text-white">Siza Charts</Link>
              </div>
            </div>
            <div className="col-3">
              <h3>Our Apps</h3>
              <p>
                Download Our apps and get extra 15% discunt on first order !!!
              </p>
              <div className="gap-10">
                <img src="./images/app.jpg" alt="App" width={140} />
                <img
                  src="./images/store.jpg"
                  alt="Store"
                  className="icon_design"
                  width={140}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3 footer_bottom ">
        <div className="container ">
          <div className="row ">
            <div className="col-12 ">
              <p className="text-center fs-5 mb-0 text-white">
                &copy; {new Date().getFullYear()} powered by{" "}
                <Link className="">Farhad</Link> ;
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
