import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../shipper/theme/themeConstants';

function LinkIcon({ primarycolor, secondarycolor, ...props }: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M8.42115 6.77124L10.0711 5.12132C11.2426 3.94975 13.1421 3.94975 14.3137 5.12132V5.12132C15.4853 6.29289 15.4853 8.19239 14.3137 9.36396L12.5731 11.1045C11.5818 12.0959 9.97454 12.0959 8.98321 11.1045V11.1045L8.82003 10.9414'
        stroke={primarycolor || themeConstants.primary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M11.721 13.3709L10.0711 15.0208C8.89949 16.1924 6.99999 16.1924 5.82842 15.0208V15.0208C4.65684 13.8493 4.65684 11.9498 5.82842 10.7782L7.56899 9.03762C8.56032 8.04629 10.1676 8.04629 11.1589 9.03762V9.03762L11.3221 9.2008'
        stroke={secondarycolor || themeConstants.secondary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
    </SvgIcon>
  );
}

export default LinkIcon;
