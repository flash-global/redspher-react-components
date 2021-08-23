import React from 'react'
import { SvgIcon } from '@material-ui/core'
import themeConstants from '../../../shipper/theme/themeConstants'

function Truck01Icon(props) {
  return (
    <SvgIcon {...props} viewBox='0 0 20 20'>
      <path
        d='M11.84 4V10.9H2V4H11.84Z'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.5 14.27H11.84V6.44H15.49L17.78 10.22V14.27H16.46'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.7 14.27H11.84V10.9H2V14.27H3.59'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.65 6.44V10.61H17.78'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.11 15.65C5.85007 15.65 6.45 15.05 6.45 14.31C6.45 13.5699 5.85007 12.97 5.11 12.97C4.36994 12.97 3.77 13.5699 3.77 14.31C3.77 15.05 4.36994 15.65 5.11 15.65Z'
        stroke={
          props.secondaryColor
            ? props.secondaryColor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.95 15.65C15.6901 15.65 16.29 15.05 16.29 14.31C16.29 13.5699 15.6901 12.97 14.95 12.97C14.2099 12.97 13.61 13.5699 13.61 14.31C13.61 15.05 14.2099 15.65 14.95 15.65Z'
        stroke={
          props.secondaryColor
            ? props.secondaryColor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </SvgIcon>
  )
}

export default Truck01Icon
