import React, { useState } from 'react';
import { Box, Slider, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const ShipperRangeSlider = ({
  min,
  max,
  rangeLabelFormat,
  shownLabelFormat,
  showLabel
}: any) => {
  const [rangeValue, setRangeValue] = React.useState([min, max]);
  const [shownLabel, setShownLabel] = useState(max - min);

  const displayRangeDelta = () => {
    // @ts-ignore
    setShownLabel(`${rangeValue[1] - rangeValue[0]}`);
  };

  const handleRangeChange = (event: any, newValue: any) => {
    setRangeValue(newValue);
    displayRangeDelta();
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Slider
        value={rangeValue}
        onChange={handleRangeChange}
        valueLabelDisplay='on'
        valueLabelFormat={rangeLabelFormat}
        min={min}
        max={max}
      />
      <Typography
        style={{
          textAlign: 'center',
          minWidth: 'max-content',
          paddingLeft: `${(100 * rangeValue[0]) / max}%`,
          paddingRight: `${(100 * (max - rangeValue[1])) / max}%`
        }}
        variant='body2'
      >
        {showLabel ? shownLabelFormat(shownLabel) : ''}
      </Typography>
    </Box>
  );
};

ShipperRangeSlider.propTypes = {
  /** min value for the slider */
  min: PropTypes.number,
  /** max value for the slider */
  max: PropTypes.number,
  /** formatted label */
  rangeLabelFormat: PropTypes.string,
  /** format for label */
  shownLabelFormat: PropTypes.string,
  /** does it show the label */
  showLabel: PropTypes.bool
};

export default ShipperRangeSlider;
