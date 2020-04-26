import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: '30%',
    maxWidth: '600px'
  },
  title: {
    marginBottom: 50
  }
});

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider({ text, min, max, value, step, handleChange }) {
  const [sliderValue, setSliderValue] = useState(value);
  const classes = useStyles();

  const onChange = (event, newValue) => {
    setSliderValue(newValue);
  }

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom className={classes.title}>
        {text}
      </Typography>
      <Slider
        min={min}
        max={max}
        value={sliderValue}
        step={step}
        marks
        onChange={onChange}
        onChangeCommitted={handleChange}
        aria-labelledby="range-slider"
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
      />
    </div>
  );
}
