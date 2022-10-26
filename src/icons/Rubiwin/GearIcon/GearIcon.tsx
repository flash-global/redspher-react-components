import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../rubiwin/theme/themeConstants';

function GearIcon({ primarycolor, ...props }: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M10.8939 17H9.10633C8.65464 17 8.28707 16.6324 8.28707 16.1807V15.0591L7.63424 14.7888L6.92725 15.4956C6.77212 15.6512 6.56573 15.7191 6.34724 15.7359C6.12849 15.7359 5.92263 15.6502 5.76803 15.495L4.50443 14.2314C4.34983 14.0774 4.26439 13.8712 4.26439 13.652C4.26439 13.4332 4.34983 13.2271 4.50496 13.0725L5.21116 12.3663L4.94088 11.7132H3.81952C3.36756 11.7132 3 11.3456 3 10.8939V9.10607C3 8.65437 3.36756 8.28681 3.81952 8.28681H4.92379C4.98821 8.12853 5.07865 7.91609 5.20485 7.6274L4.50443 6.92698C4.34484 6.76713 4.26517 6.55732 4.26517 6.34751C4.26491 6.1377 4.34458 5.92788 4.50391 5.76855L5.76855 4.50443C5.92263 4.34983 6.12849 4.26412 6.34724 4.26412C6.56599 4.26412 6.77239 4.34931 6.92725 4.50443L7.63424 5.21116L8.28707 4.94088V3.81926C8.28707 3.36756 8.65464 3 9.10633 3H10.8939C11.3456 3 11.7132 3.36756 11.7132 3.81926V4.94088L12.366 5.21116L13.073 4.50443C13.2279 4.34931 13.4337 4.26412 13.6525 4.26412C13.8712 4.26412 14.0776 4.34983 14.2322 4.50496L15.4958 5.76803C15.8148 6.08774 15.8148 6.60727 15.4964 6.92646L14.7891 7.63371L15.0594 8.28681H16.1807C16.6324 8.28681 17 8.65437 17 9.10607V10.8939C17 11.3456 16.6324 11.7132 16.1807 11.7132H15.0594L14.7891 12.3663L15.4958 13.073C15.6504 13.2271 15.7359 13.4332 15.7359 13.652C15.7359 13.8712 15.6504 14.0774 15.4953 14.232L14.2317 15.4956C14.0776 15.6502 13.8718 15.7359 13.653 15.7359C13.4343 15.7359 13.2279 15.6507 13.073 15.4956L12.366 14.7888L11.7132 15.0591V16.1807C11.7132 16.6324 11.3456 17 10.8939 17Z'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <circle
        cx='10'
        cy='10'
        r='2'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
    </SvgIcon>
  );
}

export default GearIcon;
