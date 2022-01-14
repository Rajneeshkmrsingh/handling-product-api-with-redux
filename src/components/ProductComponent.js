import React from "react";



const ProductComponent = (props)=>{
    return(
        <>
       
        <div className="box">
            <div className="img">
            <img src={props.img} alt="products" />
            </div>
            <div className="content">
                <h3>{props.title}</h3>
                <p>Category: <span>{props.category}</span></p>
                <p>Price:<span> &#8377;{props.price}</span></p>
            </div>
        </div>
        </>
    )
}
export default ProductComponent;