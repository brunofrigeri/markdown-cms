import { createContext, useCallback, useState } from 'react'
import { arrayGroupBy, ArrayGroupedBy } from '../helpers/arrayGroupBy'
import { Post } from '../helpers/types'

interface FileContextProps {
  files: ArrayGroupedBy<Post>
  currentFile?: Post
  createNewFile: (slug: string) => void
  updateFileContent: (content: string) => void
  shouldShowExplorer: boolean
  toggleExplorer: () => void
  saveFiles: (postsToSave: Post[]) => void
  setCurrentFile: (currentFile: Post) => void
}

export const FileContext = createContext<FileContextProps>({
  files: [],
  currentFile: undefined,
  createNewFile: () => {},
  updateFileContent: () => {},
  shouldShowExplorer: false,
  toggleExplorer: () => {},
  saveFiles: () => {},
  setCurrentFile: () => {},
})

const FileProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [files, setFiles] = useState<ArrayGroupedBy<Post>>([])
  const [currentFile, setCurrentFile] = useState<Post | undefined>(undefined)
  const [shouldShowExplorer, setShouldShowExplorer] = useState<boolean>(true)

  const onToggleExplorer = () => {
    setShouldShowExplorer((prevShouldShowExplorer) => !prevShouldShowExplorer)
  }

  const createNewFile = (slug: string) => {}

  const updateFileContent = (content: string) => {}

  const saveFiles = useCallback((postsToSave: Post[]) => {
    const postsToFiles = arrayGroupBy(postsToSave, 'type')

    setFiles(postsToFiles)
  }, [])

  return (
    <FileContext.Provider
      value={{
        files,
        currentFile,
        createNewFile,
        updateFileContent,
        toggleExplorer: onToggleExplorer,
        shouldShowExplorer,
        saveFiles,
        setCurrentFile,
      }}
    >
      {children}
    </FileContext.Provider>
  )
}

export default FileProvider
