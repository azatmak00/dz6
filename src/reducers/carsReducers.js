import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    cars:[]
}

export const getAsyncCars = createAsyncThunk(
    'cars/getAsyncCars',
    async (_, {dispatch}) => {
        try {
            const response = await axios('https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=100');
            dispatch(addCars(response.data.results))
        }catch (e){
            console.error(e)
        }
    }
)
const carsSlice = createSlice({
    name:'carsSlice',
    initialState,
    reducers:{
        addCars: (state, action) => {
            state.cars.push(action.payload)
        }
    }
})
export const {addCars} = carsSlice.actions
export default carsSlice.reducer