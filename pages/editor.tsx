import { GetServerSideProps } from 'next'
import React, { useEffect, useState } from 'react'
import FileManager from '../components/FileManager'
import MDXTextArea from '../components/MDXTextArea'
import PreviewContent from '../components/PreviewContent'
import Container from '../containers/Container'
import { useFile } from '../contexts/useFile'
import { getAllPosts } from '../helpers/getAllPosts'
import { Post } from '../helpers/types'
import { useMouseMove } from '../hooks/useMouseMove'
import styles from '../styles/Mdx.module.css'
import { getPostBySlug } from '../helpers/getPostBySlug'
import FloatMenuButton from '../components/FloatMenuButton'

interface MDXEditorProps {
  posts: Post[]
  currentPost?: Post
}

const MDXEditor: React.FC<MDXEditorProps> = ({ posts, currentPost }) => {
  const [currentContent, setCurrentContent] = useState<string>('')

  const {
    shouldShowExplorer,
    toggleExplorer,
    saveFiles,
    files,
    currentFile,
    setCurrentFile,
  } = useFile()

  useMouseMove()

  useEffect(() => {
    if (posts.length) {
      saveFiles(posts)
    }
  }, [posts, saveFiles])

  useEffect(() => {
    if (currentFile) {
      setCurrentContent(currentFile.content)
    }
  }, [currentFile])

  useEffect(() => {
    if (currentPost) setCurrentFile(currentPost)
  }, [currentPost, setCurrentFile])

  return (
    <Container
      shouldShowSidebar
      sideBarProps={{ onToggleExplorer: toggleExplorer }}
    >
      {shouldShowExplorer && (
        <FileManager
          files={files}
          currentFile={currentFile}
          setCurrentFile={setCurrentFile}
        />
      )}
      {shouldShowExplorer && (
        <div id="handlerFilesNMarkdown" className={styles.handler} />
      )}
      <MDXTextArea value={currentContent} setValue={setCurrentContent} />
      <div id="handlerMarkdownAndPreview" className={styles.handler} />
      <PreviewContent content={currentContent} />

      <FloatMenuButton />
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const posts = await getAllPosts()
  const slug = context.query?.slug as string | undefined

  const currentPost = (await getPostBySlug(slug)) ?? null

  return {
    props: {
      posts,
      currentPost,
    },
  }
}

export default MDXEditor
