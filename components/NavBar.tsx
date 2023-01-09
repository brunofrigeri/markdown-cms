import Link from 'next/link'
import React from 'react'
import { FaArrowAltCircleLeft } from 'react-icons/fa'

export interface NavBarProps {
  hasBackButton?: boolean
  hasFrontMatterButton?: boolean
  onFrontMatterButtonPress?: () => void
}

const NavBar = ({
  hasBackButton = false,
  hasFrontMatterButton = false,
  onFrontMatterButtonPress,
}: NavBarProps) => {
  return (
    <div className="fixed flex justify-between items-center top-0 w-full h-14 bg-gray-600 px-4 overflow-hidden">
      {hasBackButton && (
        <Link href="/">
          <FaArrowAltCircleLeft size={28} color="white" />
        </Link>
      )}
      {hasFrontMatterButton && (
        <button className="text-white" onClick={onFrontMatterButtonPress}>
          <p className="font-medium">Edit Front Matter</p>
        </button>
      )}
    </div>
  )
}

export default NavBar
