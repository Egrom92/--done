import React, { useEffect, useState } from "react";

import hc from "../hc";
import {NavLink, useHistory} from 'react-router-dom';

export default function NewProductPage(props) {
  const history = useHistory();

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState('');

  const sendNewProduct = (e, goHome = false) => {
    if (!productName.length > 0) {
      return
    }
    e.preventDefault();

    const product = {
      productName,
      productPrice,
      productId: Math.floor(Math.random() * 100),
    };
    setProductName('');
    setProductPrice('');
    Promise.resolve()
        .then(()=> hc.post("/products", product))
        .then(() => {goHome && history.push("/")});
  };

  return (
    <div className="d-flex justify-content-center" style={{ height: "100vh" }}>
      <div className="d-flex flex-column justify-content-center">
        <div className="card" style={{ width: 500 }}>
          <div className="card-header">
            <h2>New product</h2>
          </div>
          <div className="card-body">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Name:</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  value={productName}
                  onInput={(e) => setProductName(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Price:</label>
              <div className="col-sm-9">
                <input
                  type="number"
                  className="form-control"
                  value={productPrice}
                  onInput={(e) => setProductPrice(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-end">
            <button className="btn btn-success" onClick={sendNewProduct} >
              Save
            </button>
            <NavLink to='/' className="btn btn-success" onClick={(e)=>sendNewProduct(e,true)}>
              Save & go home
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
