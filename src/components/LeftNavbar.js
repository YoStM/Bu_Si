import React from 'react'
import NavbarLogo from './navbar-items/NavbarLogo'
import NavbarLink from './navbar-items/NavbarLink'
import NavbarButton from './navbar-items/NavbarButton'

function LeftNavbar() {
  return (
    <nav>
      <NavbarLogo />
      <NavbarLink />
      <NavbarLink />
      <NavbarLink />
      <NavbarLink />
      <NavbarButton />
      <NavbarButton />
    </nav>
  )
}

export default LeftNavbar
