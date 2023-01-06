import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { FaList, FaEdit } from 'react-icons/fa'

export interface SideBarProps {
  onToggleExplorer?: () => void
}

const SideBar = ({ onToggleExplorer }: SideBarProps) => {
  const { route } = useRouter()

  const shouldCallOnClick = route === '/editor'

  const onEditorClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (shouldCallOnClick) {
      event.preventDefault()
      onToggleExplorer?.()
    }
  }

  return (
    <div
      style={{ backgroundColor: '#2b3137' }}
      className="flex flex-col items-center py-5 w-20 h-screen bg-red opacity-70"
    >
      <Link href="/">
        <FaList size={30} />
      </Link>
      <Link href="/editor" className="my-10" onClick={onEditorClick}>
        <FaEdit size={30} />
      </Link>
    </div>
  )
}

export default SideBar
