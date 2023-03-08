import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../shipper/theme/themeConstants';

function LessIcon({ primarycolor, secondarycolor, ...props }: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <circle
        cx='10'
        cy='10'
        r='8'
        stroke={primarycolor || themeConstants.primary.main}
        fillOpacity={0}
      />
      <line
        x1='14.4524'
        y1='10.119'
        x2='5.54766'
        y2='10.119'
        stroke={secondarycolor || themeConstants.secondary.main}
        strokeLinecap='round'
        fillOpacity={0}
      />
    </SvgIcon>
  );
}

export default LessIcon;
