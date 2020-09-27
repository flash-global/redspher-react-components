import React from 'react'
import { RubiwinButton } from 'redspher-components'
import 'redspher-components/dist/index.css'

const sayHello = () => {
  alert('Hello Rubiwin')
}

/** This is an example RubiwinButton Branding with an additonal class */
const ExampleButton = () => (
  <RubiwinButton onClick={sayHello} text={'Click me'} className={'rubiwin'} />
)

export default ExampleButton
