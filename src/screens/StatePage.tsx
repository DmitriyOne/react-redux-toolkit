import { FunctionComponent } from 'react'
import { Heading, StateChange } from '../components'

export const StatePage: FunctionComponent = () => {
  return (
    <>
      <Heading align='center'>
        State Page
      </Heading>
      <StateChange />
    </>
  )
}
