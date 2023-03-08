import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../shipper/theme/themeConstants';

function ShippementNoLongerOfferIcon({
  primarycolor,
  secondarycolor,
  ...props
}: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <ellipse
        cx='6.89986'
        cy='13.9737'
        rx='2.1'
        ry='2.02632'
        stroke={primarycolor || themeConstants.primary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <ellipse
        cx='14.0999'
        cy='13.9737'
        rx='2.1'
        ry='2.02632'
        stroke={primarycolor || themeConstants.primary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M4.2999 13.7632H2V12.4995'
        stroke={primarycolor || themeConstants.primary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M8.99988 13.7632L11.8998 13.7632'
        stroke={primarycolor || themeConstants.primary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M11.6998 5.86841H14.318L16.7998 9.34209'
        stroke={primarycolor || themeConstants.primary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M16.4999 13.9737H17.9999V10.7895L16.7999 9.34211H11.6999V5H8'
        stroke={primarycolor || themeConstants.primary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M5.92421 4.00005L1 9M6 8.99995L1.0758 4'
        stroke={secondarycolor || themeConstants.secondary.main}
        strokeLinecap='round'
        fillOpacity={0}
      />
    </SvgIcon>
  );
}

export default ShippementNoLongerOfferIcon;
