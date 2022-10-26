import React, { FunctionComponent, InputHTMLAttributes } from 'react'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
  checked?: boolean
  onClick?: () => void
}

export const InputCheckbox: FunctionComponent<IProps> = ({
  name,
  checked,
  onClick,
  ...props
}) => {
  return (
    <div className="me-3">
      <div className="input-group-text p-3">
        <input
          type="checkbox"
          className="form-check-input mt-0"
          width={25}
          height={25}
          name={name}
          checked={checked}
          onClick={onClick}
          {...props}
        />
      </div>
    </div>
  )
}
