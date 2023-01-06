import React from 'react'
import Container from '../containers/Container'
import { useFile } from '../contexts/useFile'

const Dashboard = () => {
  const { toggleExplorer } = useFile()

  return (
    <Container
      shouldShowSidebar
      sideBarProps={{ onToggleExplorer: toggleExplorer }}
    >
      <div className="bg-white w-full h-full"></div>
    </Container>
  )
}

export default Dashboard
