import { GetStaticProps } from 'next'
import React, { useEffect, useState } from 'react'
import FloatButton, { Button } from '../../components/FloatButton'
import MDXTextArea from '../../components/MDXTextArea'
import PreviewContent from '../../components/PreviewContent'
import Container from '../../containers/Container'
import { getAllPostSlugs } from '../../helpers/getAllPostsSlugs'
import { getPostBySlug } from '../../helpers/getPostBySlug'
import { Post } from '../../helpers/types'
import { useMouseMove } from '../../hooks/useMouseMove'
import { FaSave } from 'react-icons/fa'
import FrontMatter from '../../components/FrontMatter'

interface EditBySlugProps {
  file: Post
}

const EditBySlug = ({ file }: EditBySlugProps) => {
  const [isFrontMatterVisible, setIsFrontMatterVisible] =
    useState<boolean>(false)
  const [hasChanges, setHasChanges] = useState<boolean>(false)

  useMouseMove()

  const buttonsOnFloat: Button[] = [
    {
      key: 'save',
      icon: <FaSave color="white" />,
      onPress: () => {},
      className: 'bg-blue',
    },
  ]

  useEffect(() => {
    console.log(hasChanges)
  }, [hasChanges])

  return (
    <Container
      hasBackButton
      hasFrontMatterButton
      onFrontMatterButtonPress={() => setIsFrontMatterVisible(true)}
      className="mt-14 pb-14 min-h-screen"
    >
      <MDXTextArea value={file.content} setValue={() => {}} />
      <div id="handlerMarkdownAndPreview" className="w-1 cursor-ew-resize" />
      <PreviewContent content={file.content} />

      <FrontMatter
        file={file}
        isVisible={isFrontMatterVisible}
        setIsVisible={setIsFrontMatterVisible}
        hasChanges={hasChanges}
        setHasChanges={setHasChanges}
      />
      <FloatButton buttons={buttonsOnFloat} />
    </Container>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs()

  if (!paths)
    return {
      paths: [],
      fallback: false,
    }

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post: Post = await getPostBySlug(params?.slug as string)

  return {
    props: {
      file: post,
    },
  }
}

export default EditBySlug
