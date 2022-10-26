import { ChangeEvent, FunctionComponent, InputHTMLAttributes } from 'react'
import classNames from 'classnames'

import styles from './input.module.scss'

interface IProps {
  componentClassName?: string
  type?: InputHTMLAttributes<HTMLInputElement>["type"]
  placeholder?: string
  name?: string
  value?: string
  labelText?: string
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FunctionComponent<IProps> = ({
  componentClassName,
  type = 'text',
  name,
  placeholder,
  value,
  labelText,
  handleChange,
  ...props
}) => (
  <div className={classNames('form-floating container-fluid p-0', componentClassName)}>
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
