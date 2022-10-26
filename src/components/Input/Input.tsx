import classNames from 'classnames'
import { ChangeEvent, FunctionComponent, InputHTMLAttributes } from 'react'

import styles from './input.module.scss'

interface IProps {
  type?: InputHTMLAttributes<HTMLInputElement>["type"]
  placeholder?: string
  name?: string
  value?: string
  labelText?: string
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FunctionComponent<IProps> = ({
  type = 'text',
  name,
  placeholder,
  value,
  labelText,
  handleChange,
  ...props
}) => {

  return (
    <div className='form-floating container-fluid p-0'>
      <input
        type={type}
        name={name}
        className={classNames('form-control', styles.input)}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        {...props}
      />
      <label htmlFor={name} className={classNames("text-dark", styles.label)}>
        {labelText}
      </label>
    </div>
  )
}
