/* Create a context for the MDX Editor, which will be used for managing the current file and
 * the files that could be opened.
 */
import { useContext } from 'react'
import { FileContext } from './FileProvider'

export const useFile = () => {
  const { files, currentFile, createNewFile, updateFileContent } =
    useContext(FileContext)

  return { files, currentFile, createNewFile, updateFileContent }
}
