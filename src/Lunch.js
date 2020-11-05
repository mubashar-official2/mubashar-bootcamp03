import React from 'react';
function Lunch(props){
    return (
            <div>
                <h1>Today we are serving {props.DishName1}</h1>
                <h1>Today we are serving Milks Products {props.DishName2} </h1>
            </div>
        )
}
export   default Lunch;