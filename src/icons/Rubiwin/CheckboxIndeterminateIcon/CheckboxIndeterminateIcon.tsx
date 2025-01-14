import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../rubiwin/theme/themeConstants';

function CheckboxIndeterminateIcon({
  primarycolor,
  secondarycolor,
  ...props
}: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 16 16'>
      <rect
        x='1'
        y='1'
        width='14'
        height='14'
        rx='1'
        stroke={`${primarycolor || themeConstants.grey.light}80`}
        fillOpacity={0}
      />
      <rect
        x='3'
        y='7'
        width='10'
        height='2'
        rx='1'
        fill={secondarycolor || themeConstants.primary.main}
        strokeOpacity={0}
      />
    </SvgIcon>
  );
}

export default CheckboxIndeterminateIcon;
