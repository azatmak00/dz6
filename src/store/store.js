import {configureStore} from "@reduxjs/toolkit";
import carsReducer from "../reducers/carsReducers.js";
const store = configureStore({
    reducer:{
        cars: carsReducer,
    }
})
export default store