import Checkbox from '@mui/material/Checkbox'
import { styled } from '@mui/material/styles'

export const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.status.danger,
  '&.Mui-checked': {
    color: theme.status.danger
  }
}))
