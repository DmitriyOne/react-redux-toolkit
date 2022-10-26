import { FunctionComponent } from 'react'

import { Logo } from '../Logo'
import { Menu } from '../Menu'

export const Header: FunctionComponent = () => (
  <header className='
      container-fluid 
      shadow 
      py-3 
      mb-5 
      bg-primary 
    '>
    <div className='
        container 
        d-flex 
        justify-content-between 
        align-items-center
      '>
      <Logo />
      <Menu />
    </div>
  </header>
)
