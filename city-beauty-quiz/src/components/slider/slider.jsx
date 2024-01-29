import React, {useState} from 'react'
import Slider from '@mui/material/Slider';

const CBSlider = () => {

    const labels = ["Normal Skin", "Dry Skin", "Microwrinkles", "Scaly, Rough Skin", "Itchy, Irritated Skin", "Crepey Skin"]

    const displayLabel = (value) => {
        return labels[value];
    }

    return (
        <Slider
            aria-label="Skin Type"
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={5}
            valueLabelFormat={displayLabel}
        />
    )
}

export default CBSlider