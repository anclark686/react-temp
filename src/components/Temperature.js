import React, { useState } from "react";
import './Temperature.css';

const Temperature = () => {
    const [temp, setTemp] = useState(72);
    const [color, setColor] = useState("Orange");

    const changeColor = () => {
        if (temp >= 80) {
            setColor("Red");
        } else if (temp >= 70 && temp <= 79) {
            setColor("Orange");
        } else if (temp >= 60 && temp <= 69) {
            setColor("Yellow");
        } else if (temp >= 50 && temp <= 59) {
            setColor("Green");
        } else {
            setColor("Teal");
        }
    };

    const handleUp = () => {
        setTemp(temp + 1);
        changeColor()
    };

    const handleDown = () => {
        setTemp(temp - 1);
        changeColor()
    };

    return (
        <div>
            <button onClick={handleUp}>Up</button>
            <h1 className={color}>{temp}</h1>
            <button onClick={handleDown}>Down</button>
        </div>
    )
}

export default Temperature;
