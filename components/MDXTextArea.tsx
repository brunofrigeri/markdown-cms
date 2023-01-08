import React, { useRef } from 'react'

interface MDXTextAreaProps {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const MDXTextArea = ({ value, setValue }: MDXTextAreaProps) => {
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const handleTabKey = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.code === 'Tab') {
      event.preventDefault()

      setValue((prevValue) => prevValue.concat('  '))
    }
  }

  return (
    <textarea
      id="mdxEditor"
      ref={inputRef}
      placeholder="Write your post content here..."
      value={value}
      className="flex-auto min-h-screen max-h-screen overflow-y-auto min-w-75 text-white text-md resize-none bg-editorGray p-5"
      onChange={(event) => setValue(event.currentTarget.value)}
      onKeyDown={handleTabKey}
    />
  )
}

export default MDXTextArea
