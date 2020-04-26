import React, { useState } from 'react';
import './App.css';
import Box from '@material-ui/core/Box';
import RangeSlider from "./components/RangeSlider";
import useDebounce from "./hooks/useDebounce";

function App() {
  const [peep, setPeep] = React.useState([20, 50]);
  const [firstPeep, setFirstPeep] = useState(true);

  const debouncedPeep = useDebounce(peep, 500);

  React.useEffect(
    () => {
      if (debouncedPeep && !firstPeep) {
        console.log('save peep', debouncedPeep);
      } else {
        setFirstPeep(false);
      }
    },
    [debouncedPeep]
  )

  const handlePeepChange = (event, newValue) => {
    setPeep(newValue);
  }

  return (
    <div className="App">
      <Box display="flex" flexDirection="column" alignItems="center">
        <RangeSlider
          text="PEEP"
          value={peep}
          min={0}
          max={200}
          step={10}
          handleChange={handlePeepChange}
        />
      </Box>
    </div>
  );
}

export default App;
