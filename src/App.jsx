import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAsyncCars} from "./reducers/carsReducers.js";

const App = () => {
    const dispatch = useDispatch();
    const {cars} = useSelector((state) => state.cars);
    console.log(cars)
    useEffect(() => {
        dispatch(getAsyncCars())
    }, []);
    return (
        <div style={{
            width:'1200px',
            margin:'0 auto',
            display:'flex',
            flexWrap:'wrap',
            justifyContent:'space-around',
            gap:'20px'
        }}>
            {
                cars[0]?(
                    cars[0].map((item,index) => (
                        <div style={{
                            width:'200px',
                            border:'2px solid green',
                            display:'flex',
                            flexDirection:'column',
                            alignItems:'center',
                            padding:'20px',
                            gap:'5px'
                        }} key={index}>
                            <span>Марка: {item.make}</span>
                            <span>Модель: {item.model}</span>
                            <span>Год:{item.year}</span>
                            <button>BUY</button>
                        </div>
                    ))
                ):(
                    <span>LOADING</span>
                )
            }
        </div>
    );
};

export default App;