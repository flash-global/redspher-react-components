import React from 'react'
import { SvgIcon } from '@mui/material'

function CheckpointIcon(props) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <line x1='6.5' y1='2.5' x2='6.5' y2='17.5' stroke='#171F46' />
      <path d='M6.5 4L15 4L13.5 6.5L15 9H6.5' stroke='#171F46' />
    </SvgIcon>
  )
}

export default CheckpointIcon