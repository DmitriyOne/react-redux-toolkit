import { ChangeEvent, FunctionComponent } from 'react'

import { useAppActions, useAppSelector } from '../../hooks'

import { B, Input } from '../../components'

export const StateChange: FunctionComponent = () => {
  const { firstName, lastName } = useAppSelector(state => state.stateInput)
  const { getFirstName, getLastName } = useAppActions()

  const handleChangeFirstName = (e: ChangeEvent<HTMLInputElement>) => {
    getFirstName(e.target.value)
  }

  const handleChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
    getLastName(e.target.value)
  }

  return (
    <div className='container-fluid'>
      <Input
        componentClassName='mb-4'
        labelText='Name'
        placeholder='Ivan'
        handleChange={handleChangeFirstName}
      />
      <Input
        labelText='Surname'
        placeholder='Ivanov'
        handleChange={handleChangeLastName}
      />
      <div className='d-flex flex-column align-items-start mt-5'>
        <span>
          Name: <B> {firstName} </B>
        </span>
        <span>
          Surname: <B> {lastName} </B>
        </span>
      </div>
    </div>
  )
}
