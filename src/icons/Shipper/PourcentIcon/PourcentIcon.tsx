import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../shipper/theme/themeConstants';

function PourcentIcon({ primarycolor, secondarycolor, ...props }: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M16 4L4 16'
        stroke={primarycolor || themeConstants.primary.main}
        strokeLinecap='round'
        fillOpacity={0}
      />
      <circle
        cx='14'
        cy='14'
        r='2'
        stroke={secondarycolor || themeConstants.secondary.main}
        fillOpacity={0}
      />
      <circle
        cx='6'
        cy='6'
        r='2'
        stroke={secondarycolor || themeConstants.secondary.main}
        fillOpacity={0}
      />
    </SvgIcon>
  );
}

export default PourcentIcon;
