import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../shipper/theme/themeConstants';

function ShareIcon({ primarycolor, secondarycolor, ...props }: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M15 11V16.1176V17H3V5H9'
        stroke={primarycolor || themeConstants.primary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M9.14252 10.7369L16.3197 3.55974'
        stroke={secondarycolor || themeConstants.secondary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M12.4518 3.14255H16.7368L16.7368 7.42761'
        stroke={secondarycolor || themeConstants.secondary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
    </SvgIcon>
  );
}

export default ShareIcon;
