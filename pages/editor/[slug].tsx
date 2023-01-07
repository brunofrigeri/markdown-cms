import { GetStaticProps } from 'next'
import React from 'react'
import FloatButton, { Button } from '../../components/FloatButton'
import MDXTextArea from '../../components/MDXTextArea'
import PreviewContent from '../../components/PreviewContent'
import Container from '../../containers/Container'
import { getAllPostSlugs } from '../../helpers/getAllPostsSlugs'
import { getPostBySlug } from '../../helpers/getPostBySlug'
import { Post } from '../../helpers/types'
import { useMouseMove } from '../../hooks/useMouseMove'
import { FaSave } from 'react-icons/fa'

interface EditBySlugProps {
  file: Post
}

const EditBySlug = ({ file }: EditBySlugProps) => {
  useMouseMove()

  const buttonsOnFloat: Button[] = [
    {
      key: 'save',
      icon: <FaSave color="white" />,
      onPress: () => {},
      className: 'bg-blue',
    },
  ]

  return (
    <Container hasBackButton className="mt-14 pb-14">
      <MDXTextArea value={file.content} setValue={() => {}} />
      <div id="handlerMarkdownAndPreview" className="w-1 cursor-ew-resize" />
      <PreviewContent content={file.content} />

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
