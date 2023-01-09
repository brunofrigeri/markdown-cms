import React, { PropsWithChildren } from 'react'

interface ModalProps extends PropsWithChildren {
  isVisible?: boolean
  setIsVisible: (isVisible: boolean) => void
}

const Modal = ({
  children,
  isVisible = false,
  setIsVisible = () => {},
}: ModalProps) => {
  const handleModalClose = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if ((event.target as EventTarget & HTMLDivElement).id === 'modalContainer')
      setIsVisible(false)
  }

  return isVisible ? (
    <div
      id="modalContainer"
      onClick={handleModalClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      {children}
    </div>
  ) : null
}

export default Modal
