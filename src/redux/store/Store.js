import { createStore } from "redux";
import cartReducers from "../reducers/cardReducers";


export const store= createStore(cartReducers);