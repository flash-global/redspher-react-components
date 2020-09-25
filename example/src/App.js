import React, { useState } from 'react'

import {
  RubiwinButton,
  RubiwinCheckbox,
  RubiwinFormLabel,
  RubiwinInputField,
  RubiwinInputLabel,
  RubiwinSquareButton,
  RubiwinBackButton
} from 'redspher-components'
import 'redspher-components/dist/index.css'

const App = () => {
  const [checked, setChecked] = useState(true)

  const handleChange = () => {
    setChecked(!checked)
  }
  const testProps = {
    className: 'test',
    id: 'id',
    name: 'name',
    onChange: () => {},
    placeholder: 'placeholder'
  }

  const sayHello = () => {
    window.alert('Hello Rubiwin')
  }

  return (
    <>
      <h1>This is a test for github pages</h1>
      <RubiwinButton text='yes yes' onClick={sayHello} />
      <br />
      <RubiwinCheckbox
        onChange={handleChange}
        checked={checked}
        inputProps={{ 'aria-label': 'primary checkbox' }}
        name='rubiwinCheck'
      />
      <br />
      <RubiwinFormLabel
        control={<RubiwinCheckbox />}
        onChange={handleChange}
        checked={checked}
        name='rubiwin'
        label='Rubiwin'
        labelPlacement='top'
      />
      <br />
      <RubiwinInputField {...testProps} />
      <br />
      <RubiwinInputLabel htmlFor='test'>tests 2</RubiwinInputLabel>
      <br />
      <RubiwinInputField id='test' />
      <br />
      <RubiwinSquareButton
        onClick={sayHello}
        text='Click me'
        className='rubiwin'
      />
      <br />
      <RubiwinBackButton text={<>test</>} handleButton={sayHello} />
    </>
  )
}

export default App
