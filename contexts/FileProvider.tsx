import { createContext, useState } from 'react'
import { File } from './types'

interface FileContextProps {
  files: File[]
  currentFile?: File
  createNewFile: (slug: string) => void
  updateFileContent: (content: string) => void
}

export const FileContext = createContext<FileContextProps>({
  files: [],
  currentFile: undefined,
  createNewFile: () => {},
  updateFileContent: () => {},
})

const FileProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [files, setFiles] = useState([])
  const [currentFile, setCurrentFile] = useState(undefined)

  const createNewFile = (slug: string) => {}

  const updateFileContent = (content: string) => {}

  return (
    <FileContext.Provider
      value={{ files, currentFile, createNewFile, updateFileContent }}
    >
      {children}
    </FileContext.Provider>
  )
}

export default FileProvider
