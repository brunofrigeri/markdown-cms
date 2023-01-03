import React, { useRef } from 'react'
import styles from '../styles/Mdx.module.css'

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
      className={styles.mdxEditor}
      onChange={(event) => setValue(event.currentTarget.value)}
      onKeyDown={handleTabKey}
    />
  )
}

export default MDXTextArea
