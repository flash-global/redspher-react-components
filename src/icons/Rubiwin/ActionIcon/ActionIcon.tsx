import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../rubiwin/theme/themeConstants';

function ActionIcon({ primarycolor, ...props }: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M9 5H11'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M9 10H11'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M9 15H11'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
    </SvgIcon>
  );
}

export default ActionIcon;