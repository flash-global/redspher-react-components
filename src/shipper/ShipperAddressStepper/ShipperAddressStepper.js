import React from 'react'
import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  StepContent,
  Typography
} from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import themeConstants from '../theme/themeConstants'

function QontoStepIcon(props) {
  const { index, nbItems, icons } = props

  const icon = icons.middle
  if (index === 0) {
    return icons.first
  } else if (index === nbItems - 1) {
    return icons.last
  }

  return <div>{icon}</div>
}

const QontoConnector = withStyles({
  line: {},
  completed: {
    '& $line': {
      borderColor: themeConstants.primary.light,
      borderLeftStyle: 'dashed'
    }
  }
})(StepConnector)

const ShipperStepper = ({ icons, nbItems, minHeight }) => {
  return (
    <Stepper
      activeStep={nbItems}
      connector={<QontoConnector />}
      orientation='vertical'
    >
      {Array.apply(null, Array(nbItems)).map((_item, index) => (
        <Step key={index}>
          <StepLabel
            StepIconComponent={QontoStepIcon}
            StepIconProps={{
              index,
              nbItems,
              icons
            }}
          />
          <StepContent>
            <Typography>caca</Typography>
          </StepContent>
        </Step>
      ))}
    </Stepper>
  )
}

export default ShipperStepper