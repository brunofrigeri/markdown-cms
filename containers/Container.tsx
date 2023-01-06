import React, { PropsWithChildren } from 'react'
import NavBar from '../components/NavBar'
import SideBar, { SideBarProps } from '../components/SideBar'
import styles from '../styles/Mdx.module.css'

interface ContainerProps extends PropsWithChildren {
  shouldShowSidebar?: boolean
  shouldShowNavbar?: boolean
  sideBarProps?: SideBarProps
}

const Container: React.FC<ContainerProps> = ({
  shouldShowNavbar,
  shouldShowSidebar,
  children,
  sideBarProps,
}) => {
  return (
    <>
      {shouldShowNavbar && <NavBar />}
      <div
        id="container"
        className="h-screen relative flex flex-row overflow-hidden"
      >
        {shouldShowSidebar && <SideBar {...sideBarProps} />}
        {children}
      </div>
    </>
  )
}

export default Container
