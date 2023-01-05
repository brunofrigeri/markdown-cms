import React, { useState } from 'react'
// import FileManager from '../components/FileManager'
import MDXTextArea from '../components/MDXTextArea'
import PreviewContent from '../components/PreviewContent'
import { useMouseMove } from '../hooks/useMouseMove'
import styles from '../styles/Mdx.module.css'

interface MDXEditorProps {}

const MDXEditor: React.FC<MDXEditorProps> = () => {
  const [currentContent, setCurrentContent] = useState<string>('')

  useMouseMove()

  // const previewMarkdownWithSyntaxHighlight = () => {
  //   router.replace(`${router.asPath}?content=${currentContent}&isParsed=true`)
  // }

  return (
    <div id="container" className={styles.container}>
      {/* <FileManager files={[{ slug: 'file_example', content: '' }]} /> */}
      {/* <div id="handlerFilesNMarkdown" className={styles.handler}></div> */}
      <MDXTextArea value={currentContent} setValue={setCurrentContent} />
      <div id="handlerMarkdownAndPreview" className={styles.handler}></div>
      <PreviewContent content={currentContent} />
    </div>
  )
}

export default MDXEditor
