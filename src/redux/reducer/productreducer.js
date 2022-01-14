import { ActionTypes } from "../constants/action-types";
const initialstate = {
    products:[]
};
export const productreducer = (state=initialstate,{type,payload})=>{
    switch(type){
         case ActionTypes.SET_PRODUCT:return {...state,products:payload};
        default: return state ;
    }
}
export const selectedProductReducer = (state=initialstate,{type,payload})=>{
    switch(type){
    case ActionTypes.SELECTED_PRODUCT: return {products:payload};
    case ActionTypes.REMOVE_SELECTED_PRODUCT:return {products:[]}
    default : return state;

}}