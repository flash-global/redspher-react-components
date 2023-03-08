import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../shipper/theme/themeConstants';

function ExpiredIcon({ primarycolor, secondarycolor, ...props }: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M13 14.0285C12.9724 13.4312 12.7822 12.8568 12.4539 12.3793C12.1256 11.9018 11.6743 11.5432 11.1582 11.3497L9.97468 10.8154L8.82911 11.3428C8.31573 11.536 7.86729 11.8941 7.54218 12.3707C7.21706 12.8472 7.03035 13.42 7.00634 14.0146V15H13V14.0285Z'
        stroke={primarycolor || themeConstants.primary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M8.73417 8.84457L9.96836 9.44137L11.2342 8.84457C11.7301 8.63899 12.1605 8.27944 12.473 7.80987C12.7855 7.3403 12.9664 6.78108 12.9937 6.20057V5H7V6.20057C7.02359 6.77834 7.20015 7.33607 7.50812 7.80561C7.81609 8.27516 8.24213 8.63618 8.73417 8.84457Z'
        stroke={primarycolor || themeConstants.primary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path d='M4 15L16.5 5.5' stroke='#F20738' strokeLinecap='round' />
      <ellipse
        cx='10'
        cy='10'
        rx='8'
        ry='8'
        stroke={secondarycolor || themeConstants.secondary.main}
        fillOpacity={0}
      />
    </SvgIcon>
  );
}

export default ExpiredIcon;
