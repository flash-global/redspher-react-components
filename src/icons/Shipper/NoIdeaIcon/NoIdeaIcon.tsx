import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../shipper/theme/themeConstants';

function NoIdeaIcon(props: any) {
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
      <path
        d='M9.32817 12C9.33828 11.5108 9.42025 11.1168 9.5741 10.8183C9.72794 10.5197 10.0581 10.1686 10.5645 9.76493C11.0699 9.36034 11.3961 9.0743 11.5432 8.90681C11.6901 8.73746 11.8037 8.5507 11.8801 8.35317C11.9638 8.13069 12.0042 7.89897 11.9997 7.6664C11.9997 7.14803 11.8295 6.7407 11.4893 6.44442C11.149 6.14814 10.6743 6 10.0651 6C9.45085 6 8.95563 6.142 8.57944 6.42599C8.20325 6.70998 8.01011 7.09501 8 7.58107'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
      />
      <circle
        cx='9.5'
        cy='13.5'
        r='0.25'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeWidth='0.5'
      />
    </SvgIcon>
  );
}

export default NoIdeaIcon;
