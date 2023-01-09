import React, { PropsWithChildren } from 'react'
import NavBar, { NavBarProps } from '../components/NavBar'

interface ContainerProps extends PropsWithChildren, NavBarProps {
  className?: string
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  hasBackButton,
  hasFrontMatterButton,
  onFrontMatterButtonPress,
}) => {
  return (
    <>
      <NavBar
        hasBackButton={hasBackButton}
        hasFrontMatterButton={hasFrontMatterButton}
        onFrontMatterButtonPress={onFrontMatterButtonPress}
      />
      <div
        className={`flex flex-row min-h-screen max-h-screen ${className ?? ''}`}
      >
        {children}
      </div>
    </>
  )
}

export default Container
