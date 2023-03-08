import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../shipper/theme/themeConstants';

function RailIcon({ primarycolor, secondarycolor, ...props }: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M2.16275 11V13H6.38287L7.07345 14.5H13.0895L13.7801 13H18V11H2.16275Z'
        stroke={primarycolor || themeConstants.primary.main}
        strokeMiterlimit='10'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M4.1697 15.8303C4.62826 15.8303 5 15.4586 5 15C5 14.5414 4.62826 14.1697 4.1697 14.1697C3.71113 14.1697 3.33939 14.5414 3.33939 15C3.33939 15.4586 3.71113 15.8303 4.1697 15.8303Z'
        stroke={primarycolor || themeConstants.primary.main}
        strokeMiterlimit='10'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M15.6697 15.8303C16.1283 15.8303 16.5 15.4586 16.5 15C16.5 14.5414 16.1283 14.1697 15.6697 14.1697C15.2111 14.1697 14.8394 14.5414 14.8394 15C14.8394 15.4586 15.2111 15.8303 15.6697 15.8303Z'
        stroke={primarycolor || themeConstants.primary.main}
        strokeMiterlimit='10'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M2 17.5H18'
        stroke={primarycolor || themeConstants.primary.main}
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <rect
        x='3'
        y='3'
        width='14'
        height='8'
        stroke={primarycolor || themeConstants.primary.main}
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M5 5L5 9'
        stroke={secondarycolor || themeConstants.secondary.main}
        strokeLinecap='round'
        fillOpacity={0}
      />
      <path
        d='M7.5 5L7.5 9'
        stroke={secondarycolor || themeConstants.secondary.main}
        strokeLinecap='round'
        fillOpacity={0}
      />
      <path
        d='M10 5L10 9'
        stroke={secondarycolor || themeConstants.secondary.main}
        strokeLinecap='round'
        fillOpacity={0}
      />
      <path
        d='M12.5 5L12.5 9'
        stroke={secondarycolor || themeConstants.secondary.main}
        strokeLinecap='round'
        fillOpacity={0}
      />
      <path
        d='M15 5L15 9'
        stroke={secondarycolor || themeConstants.secondary.main}
        strokeLinecap='round'
        fillOpacity={0}
      />
    </SvgIcon>
  );
}

export default RailIcon;
