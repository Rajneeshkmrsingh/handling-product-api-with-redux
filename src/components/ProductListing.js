import React, { useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import { setProduct } from "../redux/action/productAction";
import ProductComponent from "./ProductComponent";
import { useDispatch, useSelector } from "react-redux";

const ProductListing = () => {
  const products = useSelector((state) => state.productreducer.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log("err", err));
    //console.log(res.data)
    dispatch(setProduct(res.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("products:", products);
  return (
    <>
      <div className="wrap-2">
        <div className="container">
          {products.map((ele) => {
            const {id, title , price, image, category} = ele;
            return (
              <Link className="productLink" key={id} to={`/products/${id}`}>
              <ProductComponent
                title={title}
                price={price}
                img={image}
                category={category}
              />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ProductListing;
