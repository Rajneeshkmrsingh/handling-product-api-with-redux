import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RemoveSelectedProduct, selectProduct } from "../redux/action/productAction";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.selectedProductReducer.products);
  const { productId } = useParams();
  console.log(product);
  const fetchCategory = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log("err", err));
    dispatch(selectProduct(response.data));
  };
  useEffect(() => {
      if(productId && productId !== "") {
          fetchCategory();
      }
      return (dispatch(RemoveSelectedProduct()))
    
  },[productId]);
  return (
    <>
      <div className="wrap-3">
        <div className="container">
          <div className="overview">
            <img src={product.image} alt="" />
          </div>
          <div className="overviewContent">
            <h2>{product.title}</h2>
            <p className="category">Category: <span>{product.category}</span></p>
            <p className="price">Price: <span>&#8377;{product.price}</span></p>
            <p className="desc">{product.description}</p>
            <a href="" className="cart">Add To Cart</a>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetail;
