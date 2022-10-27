import { FunctionComponent } from 'react'

import { Todo, Heading } from '../components'

export const TodoPage: FunctionComponent = () => {
  return (
    <>
      <Heading align='center' className='mb-4'>
        My Todo
      </Heading>
      <Todo />
    </>

  )
}
