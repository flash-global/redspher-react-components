import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../shipper/theme/themeConstants';

function LogoAddressBookIcon(props: any) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <ellipse
        cx='10'
        cy='10'
        rx='8'
        ry='8'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
      />
    </SvgIcon>
  );
}

export default LogoAddressBookIcon;
