import { productreducer,selectedProductReducer } from "./productreducer";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({productreducer,selectedProductReducer})