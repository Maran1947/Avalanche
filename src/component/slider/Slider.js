import React, { useState, useEffect } from 'react'
import { SliderData } from './SliderData';
import './Slider.css'
import { ArrowRightRounded, ArrowLeftRounded } from '@material-ui/icons';

function Slider() {

    const [current,setCurrent] = useState(0);
    const length = SliderData.length;

    useEffect(()=>{
        let index = current === length-1 ? 0 : current + 1;
        setTimeout(()=>{
            setCurrent(index);
        },5000);
    })

    const leftSlide = () => {
        setCurrent(current === 0 ? length-1 : current - 1);
    }

    const rightSlide = () => {
        console.log(current);
        setCurrent(current === length-1 ? 0 : current + 1);
    };

    return (
        <div className="slider">
            <ArrowLeftRounded className="left_arrow" onClick={leftSlide} />
            <ArrowRightRounded className="right_arrow" onClick={rightSlide} />
            {SliderData.map((slide,index) => {
                return (
                    <div className={index===current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                            <img src={slide.image} alt="images" className="image" />
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default Slider
