import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Header.css";
import { BiSearch } from "react-icons/bi";
import { TbCategory } from "react-icons/tb";
const Header = () => {
  return (
    <>
      <header className="header_top py-3">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shopping Over $50 & Free Returns
              </p>
            </div>
            <div className="col-6 d-flex  justify-content-evenly">
              <div>
                <p className="text-end text-white mb-0">
                  Hotline :{" "}
                  <Link className="text-white" to="tel:+ ">
                    +88 01518-690471
                  </Link>
                </p>
              </div>
              <div>
                <select className="select_design">
                  <option selected>English</option>
                  {/* <option value="1">Bangla</option>
                  <option value="2">Arabic</option> */}
                </select>
              </div>
              <div>
                <select className="select_design">
                  <option selected>USD</option>
                  {/* <option value="1">BD</option>
                  <option value="2">In</option> */}
                </select>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="header-main py-3">
        <div className="container-fluid">
          <div className="row mb-0 d-flex align-items-center">
            <div className="col-2 d-flex align-items-center justify-content-center">
              <h3 className="logo">
                <Link className="text-white">
                  <img src="./images/logo-1.png" alt="" width={100} />
                </Link>
              </h3>
            </div>
            <div className="col-5">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control input_design"
                  placeholder="Search Product Name.."
                  aria-label="Search Product Name.."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  <BiSearch className="button_style" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header_main_links d-flex align-items-center gap-40">
                <div className="">
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="./images/compare.svg" alt="Compare" srcset="" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="./images/wishlist.svg" alt="Wishlist" srcset="" />
                    <p className="mb-0">
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="./images/user.svg" alt="Login" srcset="" />
                    <p className="mb-0">
                      Login <br /> My Account
                    </p>
                  </Link>
                </div>
                <div className="d-flex">
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="./images/cart.svg" alt="pic" srcset="" />
                    <div className="d-flex flex-column  position-relative">
                      <span className="position-absolute top start-100 translate-middle badge rounded-pill bg-danger">
                        0
                      </span>
                    </div>
                    <p className="mb-0">$0.00</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header_bottom py-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="menu d-flex align-items-center gap-40 ">
                <div>
                  <div className="dropdown d-flex justify-content-center">
                    <TbCategory className="fs-3 text-white" />
                    <button
                      className="btn btn-secondary dropdown-toggle border-0 bg-transparent px-3"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="me-3">Shop Categories</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item text-white" to="#">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="#">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="#">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="menu_links d-flex justify-content-center">
                    <div className="d-flex align-items-center gap-15">
                      <NavLink to={"/"}>Home</NavLink>
                      <NavLink to={"/store"}>Our Store </NavLink>
                      <NavLink to={"/blogs"}>Blogs</NavLink>
                      <NavLink to={"/contact"}>Contact</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
