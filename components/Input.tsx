import React from 'react'

interface InputProps {
  value: string
  setValue: (value: string) => void
  type: React.HTMLInputTypeAttribute
  placeholder: string
}

const Input = ({ value, setValue, type, placeholder }: InputProps) => {
  return (
    <input
      className="border p-2 rounded-sm my-2 w-full"
      placeholder={placeholder}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      type={type}
    />
  )
}

export default Input
