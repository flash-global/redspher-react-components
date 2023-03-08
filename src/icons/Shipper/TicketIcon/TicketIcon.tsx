import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../shipper/theme/themeConstants';

function TicketIcon({ primarycolor, secondarycolor, ...props }: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M6.22364 8.12772L11.8664 13.7705L18.2964 7.34047C18.3453 7.29159 18.3732 7.22548 18.3743 7.15604C18.3753 7.0866 18.3494 7.01926 18.3019 6.96817L16.8912 5.55749C16.8395 5.50928 16.7716 5.48231 16.7012 5.48203C16.6308 5.48174 16.5632 5.50816 16.5118 5.55596L16.3159 5.75186C16.045 6.02279 15.6767 6.17412 15.292 6.17257C14.9073 6.17101 14.5377 6.01671 14.2646 5.74359C13.9915 5.47047 13.8372 5.10091 13.8356 4.71621C13.8341 4.33151 13.9854 3.96319 14.2563 3.69226L14.4522 3.49635C14.4994 3.442 14.5233 3.37129 14.5191 3.29917C14.5149 3.22705 14.4828 3.15918 14.4296 3.10989L13.0189 1.69921C12.9684 1.6487 12.9001 1.62016 12.8289 1.61987C12.7578 1.61959 12.6897 1.64757 12.6396 1.69768L6.21658 8.12067L6.22364 8.12772Z'
        stroke={primarycolor || themeConstants.primary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M1.63982 12.818C1.64085 12.7486 1.66878 12.6825 1.71773 12.6336L4.89413 9.42899L10.5369 15.0717L7.33936 18.2692C7.29112 18.3175 7.22553 18.3444 7.15702 18.3442C7.08851 18.3439 7.0227 18.3164 6.97406 18.2678L5.56338 16.8571C5.51287 16.8066 5.48433 16.7382 5.48404 16.6671C5.48376 16.5959 5.51174 16.5278 5.56184 16.4777L5.75076 16.2888C6.02168 16.0179 6.17301 15.6496 6.17146 15.2649C6.16991 14.8802 6.0156 14.5106 5.74248 14.2375C5.46936 13.9644 5.0998 13.8101 4.7151 13.8085C4.3304 13.807 3.96208 13.9583 3.69116 14.2292L3.50224 14.4181C3.45214 14.4682 3.38403 14.4962 3.31288 14.4959C3.24174 14.4956 3.1734 14.4671 3.12289 14.4166L1.71221 13.0059C1.66474 12.9548 1.63879 12.8875 1.63982 12.818Z'
        stroke={secondarycolor || themeConstants.secondary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <line
        x1='10.0142'
        y1='7.87285'
        x2='11.4284'
        y2='6.45864'
        stroke={secondarycolor || themeConstants.secondary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <line
        x1='11.4284'
        y1='9.28703'
        x2='12.8426'
        y2='7.87282'
        stroke={secondarycolor || themeConstants.secondary.main}
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
    </SvgIcon>
  );
}

export default TicketIcon;
