import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../rubiwin/theme/themeConstants';

function SecondDriverIcon({ primarycolor, ...props }: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M10 2C5.56436 2 2 5.60396 2 10C2 14.4356 5.60396 18 10 18C14.4356 18 18 14.396 18 10C18 5.60396 14.396 2 10 2ZM4.57426 7.18812C5.60396 5.24752 7.62376 3.90099 10 3.90099C12.3366 3.90099 14.396 5.24752 15.4257 7.18812C15.6634 7.66337 15.3465 8.25742 14.7921 8.21782C14.396 8.17822 14 8.17822 13.604 8.13861C13.2079 8.13861 12.8911 7.94059 12.6139 7.66337C12.0198 6.9901 11.0693 6.55446 10 6.55446C8.93069 6.55446 8.0198 6.9901 7.38614 7.66337C7.14852 7.94059 6.79208 8.13861 6.39604 8.13861C6 8.13861 5.60396 8.17822 5.20792 8.21782C4.69307 8.21782 4.33663 7.66337 4.57426 7.18812ZM7.18812 15.4653C5.68317 14.7129 4.57426 13.3267 4.09901 11.703C3.94059 11.1089 4.49505 10.5941 5.08911 10.7921C6.75247 11.3465 7.94059 12.7327 8.25742 14.4356L8.29703 14.6337C8.41584 15.2673 7.78218 15.7426 7.18812 15.4653ZM10 11.6238C9.20792 11.6238 8.61386 10.9901 8.61386 10.2376C8.61386 9.44555 9.24752 8.85149 10 8.85149C10.7921 8.85149 11.3861 9.48515 11.3861 10.2376C11.3861 11.0297 10.7525 11.6238 10 11.6238ZM12.7723 15.4653C12.2178 15.7426 11.5446 15.2673 11.6634 14.6337L11.703 14.4356C12.0198 12.7327 13.2475 11.3465 14.8713 10.7921C15.4257 10.5941 16.0198 11.1089 15.8614 11.703C15.4257 13.3267 14.2772 14.7129 12.7723 15.4653Z'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
    </SvgIcon>
  );
}

export default SecondDriverIcon;
