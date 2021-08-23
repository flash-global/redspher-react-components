import React from 'react'
import { SvgIcon } from '@material-ui/core'
import themeConstants from '../../../shipper/theme/themeConstants'

function ArrowRight2Icon(props) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M15.3536 10.3536C15.5488 10.1583 15.5488 9.84171 15.3536 9.64645L12.1716 6.46447C11.9763 6.2692 11.6597 6.2692 11.4645 6.46447C11.2692 6.65973 11.2692 6.97631 11.4645 7.17157L14.2929 10L11.4645 12.8284C11.2692 13.0237 11.2692 13.3403 11.4645 13.5355C11.6597 13.7308 11.9763 13.7308 12.1716 13.5355L15.3536 10.3536ZM4 9.5C3.72386 9.5 3.5 9.72386 3.5 10C3.5 10.2761 3.72386 10.5 4 10.5V9.5ZM15 9.5H4V10.5H15V9.5Z'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
      />
    </SvgIcon>
  )
}

export default ArrowRight2Icon