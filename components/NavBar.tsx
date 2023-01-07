import Link from 'next/link'
import React from 'react'
import { FaArrowAltCircleLeft } from 'react-icons/fa'

export interface NavBarProps {
  hasBackButton?: boolean
}

const NavBar = ({ hasBackButton = false }: NavBarProps) => {
  return (
    <div className="fixed flex items-center top-0 w-full h-14 bg-gray-600 px-4 overflow-hidden">
      {hasBackButton && (
        <Link href="/">
          <FaArrowAltCircleLeft size={28} color="white" />
        </Link>
      )}
    </div>
  )
}

export default NavBar
