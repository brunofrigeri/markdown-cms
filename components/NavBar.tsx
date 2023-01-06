import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className="static flex justify-evenly items-center w-full h-10 bg-red">
      <Link href="">Save as Draft</Link>
      <Link href="">Publish</Link>
    </nav>
  )
}

export default NavBar
