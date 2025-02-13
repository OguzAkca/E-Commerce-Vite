import { ChevronLeft, ChevronRight, RectangleHorizontal } from 'lucide-react';
import React, { useState } from 'react'

function Slider({ slides }) {
    const [current, setCurrent] = useState(0);
    const sliderStyles = {
        height: '100%',
        position: 'relative',
        
    };

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[current].url})`, 
    };

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        left: '32px',
        transform: 'translate(0, -50%)',
        fontSize: '45px',
        cursor: 'pointer',
        zIndex: 1,
        color: 'white'
    };
    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        right: '32px',
        transform: 'translate(0, -50%)',
        fontSize: '45px',
        cursor: 'pointer',
        zIndex: 1,
        color: 'white'
    };

    const recContainerStyles = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px'
    }

    const recStyle ={
        margin : '0 3px',
        cursor: 'pointer',
        fontSize: '20px',
    }
    const goToPrevious = () => {
        const isFirstSlide = current === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : current - 1;
        setCurrent(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = current === slides.length - 1;  
        const newIndex = isLastSlide ? 0 : current + 1;
        setCurrent(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrent(slideIndex);
    };


    return (
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious}><ChevronLeft/></div>
            <div style={slideStyles} ></div>
            <div style={rightArrowStyles} onClick={goToNext}><ChevronRight/></div>
            <div style={recContainerStyles}>
                {slides.map((slide, slideIndex) => (
                    <div className='relative top-[-45px] color-[white]' key={slideIndex} style={recStyle} onClick={() => goToSlide(slideIndex)}><RectangleHorizontal/></div>
                ))}
            </div>
        </div>
    );
}

export default Slider;
