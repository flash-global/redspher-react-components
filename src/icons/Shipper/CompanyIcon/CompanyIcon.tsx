import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../shipper/theme/themeConstants';

function CompanyIcon({ primarycolor, secondarycolor, ...props }: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M2 2H10V18H2V2Z'
        stroke={primarycolor || themeConstants.primary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M4.4 14H7.6V18H4.4V14Z'
        stroke={primarycolor || themeConstants.primary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M4 5H5'
        stroke={primarycolor || themeConstants.primary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M7.2 5H8.2'
        stroke={secondarycolor || themeConstants.secondary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M4 9H5'
        stroke={secondarycolor || themeConstants.secondary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M4 7H5'
        stroke={secondarycolor || themeConstants.secondary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M7.2 9H8.2'
        stroke={primarycolor || themeConstants.primary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M7.2 7H8.2'
        stroke={primarycolor || themeConstants.primary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M4 11H5'
        stroke={secondarycolor || themeConstants.secondary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M7.2 11H8.2'
        stroke={primarycolor || themeConstants.primary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M10 7H18V18H10V7Z'
        stroke={primarycolor || themeConstants.primary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M12.4 14H15.6V18H12.4V14Z'
        stroke={primarycolor || themeConstants.primary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M12 9H13'
        stroke={primarycolor || themeConstants.primary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M15 9H16'
        stroke={secondarycolor || themeConstants.secondary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M12 11H13'
        stroke={primarycolor || themeConstants.primary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M15 11H16'
        stroke={secondarycolor || themeConstants.secondary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
    </SvgIcon>
  );
}

export default CompanyIcon;
