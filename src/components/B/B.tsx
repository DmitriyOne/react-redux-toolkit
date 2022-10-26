import { FunctionComponent, ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

export const B: FunctionComponent<IProps> = ({
  children
}) => (
  <b>
    {children}
  </b>
)
