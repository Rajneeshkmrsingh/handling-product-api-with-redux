import { ActionTypes } from "../constants/action-types"; 
export const setProduct = (products)=>{
    return (
        {
            type:ActionTypes.SET_PRODUCT,
            payload:products
        }
    )
} 
export const selectProduct = (product)=>{
    return(
        {
            type:ActionTypes.SELECTED_PRODUCT,
            payload:product 
        }
    )
};
export const RemoveSelectedProduct=()=>{
    return { type:ActionTypes.REMOVE_SELECTED_PRODUCT}
}
