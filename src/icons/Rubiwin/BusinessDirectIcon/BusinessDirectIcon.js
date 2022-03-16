import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function BusinessDirectIcon(props) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M2.3346 18H12.6654C12.8502 18 13 17.8727 13 17.7157V16.2843C13 16.1273 12.8502 16 12.6654 16H2.3346C2.14984 16 2 16.1273 2 16.2843V17.7157C2 17.8727 2.14984 18 2.3346 18Z'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.grey.main
        }
      />
      <path
        d='M7.94485 11.5906L8.44355 12.0894C8.50605 12.1519 8.54118 12.2367 8.54118 12.3251C8.54118 12.4135 8.50605 12.4984 8.44355 12.5609L7.13445 13.8701C7.06934 13.9352 6.98404 13.9678 6.89877 13.9678C6.81348 13.9678 6.72822 13.9352 6.66311 13.8701L2.09769 9.30355C1.96744 9.17331 1.96744 8.96232 2.09769 8.8321L3.40658 7.52268C3.53158 7.39765 3.75294 7.39765 3.87794 7.52268L4.37664 8.0215M7.94485 11.5906L8.96601 10.5692L16.2975 17.9024C16.3626 17.9675 16.4479 18 16.5332 18C16.6185 18 16.7038 17.9675 16.7689 17.9024L17.9023 16.7688C17.9648 16.7063 18 16.6214 18 16.533C18 16.4446 17.9648 16.3598 17.9023 16.2973L10.5709 8.96399L11.5921 7.94254L12.0907 8.4412C12.1558 8.50632 12.241 8.5389 12.3263 8.5389C12.4116 8.5389 12.4969 8.50632 12.562 8.4412L13.8711 7.13194C13.9336 7.06942 13.9688 6.9846 13.9688 6.89622C13.9688 6.80782 13.9336 6.723 13.8711 6.66049L9.30551 2.09377C9.18051 1.96874 8.95915 1.96874 8.83415 2.09377L7.52523 3.40316C7.39505 3.53342 7.39505 3.74441 7.52523 3.87465L8.02377 4.3733M7.94485 11.5906L4.37664 8.0215M8.02377 4.3733L4.37664 8.0215M8.02377 4.3733L12.1178 8.46838'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.grey.main
        }
      />
    </SvgIcon>
  )
}

export default BusinessDirectIcon
