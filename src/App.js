import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import "./App.css";
import { cartProducts } from "./Redux/Cart";

function App() {
  const { data } = useSelector((state) => state.Cart);
  const dispatch = useDispatch();
  console.log("hiii", data);
  useEffect(() => {
    dispatch(cartProducts());
  }, [dispatch]);
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-primary ">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="/">Apni Dukaan</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 navBar">
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="/">Categories</a>
            </li>
          </ul>
        </div>
        <form className="d-flex" role="search">
            <button className="btn btn-outline-dark text-light me-2" type="submit">Cart</button>
          </form>
      </div>
    </nav>
    
      <h1 className="text-center text-light mt-4">
        Products
        <hr className="text-light" />
      </h1>
      <div className="container-fluid">
        <div className="row">
          {data.map((items) => (
            <>
              <div className="col-lg-4 Products">
                <div className="col">
                  <div className="card m-3">
                    <p className="card-text bg-danger text-center text-light mb-0">Discount: {items.discountPercentage}%</p>
                    <img
                      src={items.thumbnail}
                      style={{ height: "250px" }}
                      class="card-img-top"
                      alt="Internet error"
                    />
                    <div className="card-body bg-dark text-light" style={{ height: "250px" }}
                    >
                      <h5 className="card-title">{items.title}</h5>
                      
                      <p className="card-text">{items.description}</p>
                      <p className="card-text text-center">Price: ₹{items.price} <span className="mx-5">Stock: {items.stock}</span></p>
                      <div className="d-flex m-2">
                    <button className="btn btn-outline-success w-50 mx-3">Add to cart</button>
                    <button className="btn btn-outline-primary w-50">Buy Now</button>
                    </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
