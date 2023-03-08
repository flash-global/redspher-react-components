import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../shipper/theme/themeConstants';

function SeaIcon({ primarycolor, secondarycolor, ...props }: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M14.5143 9.59857H12.2743V11.7776H14.5143V9.59857Z'
        stroke={primarycolor || themeConstants.primary.main}
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M12.2743 9.59857H10.24V11.7776H12.2743V9.59857Z'
        stroke={secondarycolor || themeConstants.secondary.main}
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M14.5143 7.41962H12.2743V9.59863H14.5143V7.41962Z'
        stroke={secondarycolor || themeConstants.secondary.main}
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M16.7543 9.59857H14.5143V11.7776H16.7543V9.59857Z'
        stroke={secondarycolor || themeConstants.secondary.main}
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M16.7543 7.41962H14.5143V9.59863H16.7543V7.41962Z'
        stroke={secondarycolor || themeConstants.secondary.main}
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M11.0057 5.08053V3'
        stroke={secondarycolor || themeConstants.secondary.main}
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M5.29144 5.08053V3'
        stroke={secondarycolor || themeConstants.secondary.main}
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M3.08572 3L11.5771 3'
        stroke={secondarycolor || themeConstants.secondary.main}
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M2 11.7899L2.95996 16.7143H17.0286L18 11.7899H2Z'
        stroke={primarycolor || themeConstants.primary.main}
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
      <path
        d='M8.00001 5.52374H3.08572V11.79H8.00001V5.52374Z'
        stroke={primarycolor || themeConstants.primary.main}
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
        fillOpacity={0}
      />
    </SvgIcon>
  );
}

export default SeaIcon;
