import { FunctionComponent } from 'react'

import { AnimatedPage, AsyncUsers, Heading } from '../components'

export const UsersPage: FunctionComponent = () => {
  return (
    <AnimatedPage>
      <div
        className='d-flex flex-column align-items-center'
        style={{ width: '100%', maxWidth: '400px' }}
      >
        <Heading align='center' className='mb-4'>
          Async users
        </Heading>
        <AsyncUsers />
      </div>
    </AnimatedPage>
  )
}
