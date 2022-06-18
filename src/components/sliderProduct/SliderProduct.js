import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState, useEffect } from "react";

function SliderProduct({ changeProductsSlider, min, max }) {
  const [value, setValue] = useState([]);

  useEffect(() => {
    setValue([+min, +max]);
    
  }, [max, min]);
  console.log(min, max);
  function valuetext(value) {
    return `${value}°C`;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    changeProductsSlider(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={+min}
        max={+max}
        
      />
    </Box>
  );
}

export default SliderProduct;
