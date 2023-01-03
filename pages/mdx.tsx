import { GetServerSideProps } from 'next'
import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
// import FileManager from '../components/FileManager'
import MDXTextArea from '../components/MDXTextArea'
import PreviewContent from '../components/PreviewContent'
import styles from '../styles/Mdx.module.css'
import { compileRemarkOnSSR } from '../lib/remarkSSR'

interface MDXEditorProps {
  content: string
  isParsed?: boolean
}

const MDXEditor: React.FC<MDXEditorProps> = ({ content, isParsed = false }) => {
  const router = useRouter()
  const [isDraggingLeft, setIsDraggingLeft] = useState<boolean>(false)
  const [isDraggingRight, setIsDraggingRight] = useState<boolean>(false)

  const [currentContent, setCurrentContent] = useState<string>('')

  useEffect(() => {
    if (content) {
      setCurrentContent(content)
    }
  }, [content])

  // const previewMarkdownWithSyntaxHighlight = () => {
  //   router.replace(`${router.asPath}?content=${currentContent}&isParsed=true`)
  // }

  const onMouseDown = (event: MouseEvent) => {
    if ((event.target as HTMLElement).id === 'handlerMarkdownAndPreview') {
      setIsDraggingRight(true)
    } else if ((event.target as HTMLElement).id === 'handlerFilesNMarkdown') {
      setIsDraggingLeft(true)
    }
  }

  const onMouseMove = useCallback(
    (event: MouseEvent) => {
      if (isDraggingLeft) {
        const handlerFilesNMarkdown = document.querySelector(
          '#handlerFilesNMarkdown'
        )
        const container = handlerFilesNMarkdown?.parentElement
        const filesElement = container?.querySelector('#files') as HTMLElement

        const minWidth = 200
        const maxWidth = window.innerWidth / 2

        if (filesElement) {
          filesElement.style.width =
            (event.clientX > maxWidth
              ? maxWidth
              : Math.max(event.clientX, minWidth)) + 'px'
          filesElement.style.flexGrow = '0'
        }
      } else if (isDraggingRight) {
        const handlerFilesNMarkdown = document.querySelector(
          '#handlerMarkdownAndPreview'
        )

        const container = handlerFilesNMarkdown?.parentElement
        const previewElement = container?.querySelector(
          '#preview'
        ) as HTMLElement

        const minWidth = 300
        const maxWidth = window.innerWidth / 2

        const clientX = (container?.clientWidth ?? 0) - event.clientX

        if (previewElement) {
          previewElement.style.flex = '1 1 auto'
          previewElement.style.width =
            (clientX > maxWidth ? maxWidth : Math.max(clientX, minWidth)) + 'px'
          previewElement.style.flexGrow = '0'
        }
      } else {
        return false
      }
    },
    [isDraggingLeft, isDraggingRight]
  )

  const onMouseUp = () => {
    setIsDraggingLeft(false)
    setIsDraggingRight(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)

    return () => {
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }
  }, [onMouseMove])

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

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { content } = context.query

//   const source = await compileRemarkOnSSR(content as string)

//   return {
//     props: {
//       content: source.toString(),
//     },
//   }
// }

export default MDXEditor
