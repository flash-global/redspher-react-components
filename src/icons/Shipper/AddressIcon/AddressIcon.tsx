import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../shipper/theme/themeConstants';

function AddressIcon({ primarycolor, secondarycolor, ...props }: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M16 5.27366C16 7.08165 13 10 13 10C13 10 10 7.08165 10 5.27366C10 3.46567 11.3431 2 13 2C14.6569 2 16 3.46567 16 5.27366Z'
        stroke={primarycolor || themeConstants.primary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <ellipse
        cx='13'
        cy='4.88245'
        rx='1'
        ry='1'
        stroke={secondarycolor || themeConstants.secondary.main}
        fillOpacity={0}
      />
      <path
        d='M12 19L17 17V8'
        stroke={secondarycolor || themeConstants.secondary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M3 7L8 5V17L3 19V7Z'
        stroke={primarycolor || themeConstants.primary.main}
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M8 5V17L12 19V12'
        stroke={primarycolor || themeConstants.primary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
    </SvgIcon>
  );
}

export default AddressIcon;
