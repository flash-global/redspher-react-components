import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../rubiwin/theme/themeConstants';

function AdrIcon({ primarycolor, ...props }: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <rect
        x='10.071'
        y='1.92896'
        width='12'
        height='12'
        transform='rotate(45 10.071 1.92896)'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M6.72765 11.39H5.39765L5.16265 12H3.96265L5.49265 8.5H6.65265L8.18265 12H6.96265L6.72765 11.39ZM6.40265 10.54L6.06265 9.66L5.72265 10.54H6.40265Z'
        fill={primarycolor || themeConstants.grey.main}
        strokeOpacity={0}
      />
      <path
        d='M8.37097 8.5H10.096C10.486 8.5 10.8293 8.57167 11.126 8.715C11.426 8.855 11.6576 9.05667 11.821 9.32C11.9876 9.58333 12.071 9.89333 12.071 10.25C12.071 10.6067 11.9876 10.9167 11.821 11.18C11.6576 11.4433 11.426 11.6467 11.126 11.79C10.8293 11.93 10.486 12 10.096 12H8.37097V8.5ZM10.046 11.08C10.2993 11.08 10.501 11.0083 10.651 10.865C10.8043 10.7183 10.881 10.5133 10.881 10.25C10.881 9.98667 10.8043 9.78333 10.651 9.64C10.501 9.49333 10.2993 9.42 10.046 9.42H9.55097V11.08H10.046Z'
        fill={primarycolor || themeConstants.grey.main}
        strokeOpacity={0}
      />
      <path
        d='M14.0018 11.12H13.6818V12H12.5018V8.5H14.1868C14.5102 8.5 14.7918 8.55333 15.0318 8.66C15.2718 8.76667 15.4568 8.92 15.5868 9.12C15.7168 9.32 15.7818 9.55333 15.7818 9.82C15.7818 10.07 15.7252 10.2883 15.6118 10.475C15.4985 10.6617 15.3352 10.81 15.1218 10.92L15.8568 12H14.5968L14.0018 11.12ZM14.5918 9.82C14.5918 9.69 14.5518 9.59 14.4718 9.52C14.3918 9.44667 14.2718 9.41 14.1118 9.41H13.6818V10.23H14.1118C14.2718 10.23 14.3918 10.195 14.4718 10.125C14.5518 10.0517 14.5918 9.95 14.5918 9.82Z'
        fill={primarycolor || themeConstants.grey.main}
        strokeOpacity={0}
      />
    </SvgIcon>
  );
}

export default AdrIcon;
