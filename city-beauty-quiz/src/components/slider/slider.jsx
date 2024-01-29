import React, { useState } from 'react'
import Slider from '@mui/material/Slider';
import './slider.css'

const CBSlider = ({ setValue, valueLabels, range, minMaxLabels }) => {


    const displayLabel = (value) => {
        return valueLabels[value];
    }

    const setSkinType = (e) => {
        setValue(e.target.value);
        console.log(e.target.value);
    }

    return (
        <div className="slider-container">
            <Slider
                aria-label="Skin Type"
                defaultValue={0}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={range}
                valueLabelFormat={displayLabel}
                onChange={setSkinType}
                sx={{ width: "80%" }}
            />
            <div className='labels'>
                <p className='start-label'>
                    {minMaxLabels[0]}
                </p>
                <p className='end-label'>
                    {minMaxLabels[1]}
                </p>
            </div>
        </div>

    )
}

export default CBSlider