import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../rubiwin/theme/themeConstants';

function EuroIcon({ primarycolor, ...props }: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M11.8189 14.8876C13.1907 14.8876 14.321 14.4157 15.2099 13.4719L16 14.264C15.4842 14.8371 14.8642 15.2697 14.1399 15.5618C13.4156 15.8539 12.62 16 11.7531 16C10.7984 16 9.91495 15.8146 9.10288 15.4438C8.29081 15.0618 7.60494 14.5337 7.04527 13.8596C6.49657 13.1854 6.11797 12.4101 5.90946 11.5337H4V10.7921H5.77778C5.74486 10.5337 5.72839 10.2697 5.72839 10C5.72839 9.7191 5.74486 9.45506 5.77778 9.20787H4V8.46629H5.90946C6.11797 7.58989 6.49657 6.81461 7.04527 6.14045C7.60494 5.46629 8.29081 4.94382 9.10288 4.57303C9.91495 4.19101 10.7984 4 11.7531 4C12.62 4 13.4156 4.14607 14.1399 4.4382C14.8642 4.73034 15.4842 5.1573 16 5.7191L15.2099 6.51124C14.31 5.57865 13.1797 5.11236 11.8189 5.11236C10.6996 5.11236 9.71742 5.42135 8.87243 6.03933C8.03841 6.6573 7.47325 7.46629 7.17695 8.46629H12.823V9.20787H6.99588C6.96296 9.45506 6.9465 9.7191 6.9465 10C6.9465 10.2697 6.96296 10.5337 6.99588 10.7921H12.823V11.5337H7.17695C7.47325 12.5337 8.03841 13.3427 8.87243 13.9607C9.71742 14.5787 10.6996 14.8876 11.8189 14.8876Z'
        fill={primarycolor || themeConstants.grey.main}
        strokeOpacity={0}
      />
    </SvgIcon>
  );
}

export default EuroIcon;
