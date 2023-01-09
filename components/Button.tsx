import React, { PropsWithChildren } from 'react'

interface ButtonProps extends PropsWithChildren {
  bgColor: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  className?: string
}

const Button = ({ children, bgColor, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 text-white font-medium rounded-sm mb-2 bg-${bgColor} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
