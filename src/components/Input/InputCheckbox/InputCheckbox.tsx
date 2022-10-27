import React, { FunctionComponent, InputHTMLAttributes } from 'react'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
  checked?: boolean
}

export const InputCheckbox: FunctionComponent<IProps> = ({
  name,
  checked,
  ...props
}) => {
  return (
    <div className="me-3">
      <div className="input-group-text p-3 input-checkbox">
        <input
          type="checkbox"
          className="form-check-input mt-0"
          width={25}
          height={25}
          name={name}
          checked={checked}
          {...props}
        />
      </div>
    </div>
  )
}
