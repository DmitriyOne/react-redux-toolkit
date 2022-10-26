import { FunctionComponent } from 'react'
import { AsyncTodo, B, Button, Heading, Input } from '../components'

export const HomePage: FunctionComponent = () => {
  return (
    <>
      <Heading align='center'>
        Home Page
      </Heading>
      <Input
        labelText='State Change'
        placeholder='ivan'
      />
      <br />
      <Button className='btn btn-dark'>
        Click me!
      </Button>
      <br />
      <B>Bold Text</B>
      <br />
      <AsyncTodo />
    </>
  )
}
