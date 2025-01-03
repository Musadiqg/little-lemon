import React from 'react'
import Logo from '../icons_assets/Logo.svg'

const Header = () => {
  return (
    <>
        <header>
            <h1>This is header</h1>
        </header>
        <img src={Logo} alt="logo" />
    </>

  )
}

export default Header