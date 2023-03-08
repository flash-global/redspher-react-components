import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../shipper/theme/themeConstants';

function LogoDefaultAddressBookIcon({ primarycolor, ...props }: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <mask
        id='mask0_67_3479'
        style={{ maskType: 'alpha' }}
        maskUnits='userSpaceOnUse'
        x='1'
        y='1'
        width='18'
        height='18'
      >
        <ellipse
          cx='10'
          cy='10'
          rx='8'
          ry='8'
          fill={primarycolor || themeConstants.primary.main}
          stroke={primarycolor || themeConstants.primary.main}
        />
      </mask>
      <g mask='url(#mask0_67_3479)'>
        <ellipse
          cx='10'
          cy='10'
          rx='8'
          ry='8'
          fill='url(#paint0_linear_67_3479)'
          stroke={primarycolor || themeConstants.primary.main}
        />
        <path
          d='M3.81184 7.02V9.61H8.34784V11.43H3.81184V15H1.54384V5.2H8.94984V7.02H3.81184ZM16.7292 15L14.8392 12.27H14.7272H12.7532V15H10.4852V5.2H14.7272C15.5952 5.2 16.3466 5.34467 16.9812 5.634C17.6252 5.92333 18.1199 6.334 18.4652 6.866C18.8106 7.398 18.9832 8.028 18.9832 8.756C18.9832 9.484 18.8059 10.114 18.4512 10.646C18.1059 11.1687 17.6112 11.57 16.9672 11.85L19.1652 15H16.7292ZM16.6872 8.756C16.6872 8.20533 16.5099 7.78533 16.1552 7.496C15.8006 7.19733 15.2826 7.048 14.6012 7.048H12.7532V10.464H14.6012C15.2826 10.464 15.8006 10.3147 16.1552 10.016C16.5099 9.71733 16.6872 9.29733 16.6872 8.756Z'
          fill='white'
        />
        <ellipse
          cx='10'
          cy='10'
          rx='8'
          ry='8'
          stroke={primarycolor || themeConstants.primary.main}
        />
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_67_3479'
          x1='4.85811'
          y1='10.0255'
          x2='10.1164'
          y2='10.7362'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#003B81' />
          <stop
            offset='0.695678'
            stopColor={primarycolor || themeConstants.primary.main}
          />
          <stop offset='1' stopColor='#0095FD' />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
}

export default LogoDefaultAddressBookIcon;
