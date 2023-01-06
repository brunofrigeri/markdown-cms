import { GetStaticProps } from 'next'
import React from 'react'
import Container from '../containers/Container'
import { useFile } from '../contexts/useFile'
import { getAllPosts } from '../helpers/getAllPosts'
import { Post } from '../helpers/types'

interface IDashboardProps {
  posts: Post[]
}

const Dashboard = ({ posts = [] }: IDashboardProps) => {
  const { toggleExplorer } = useFile()

  return (
    <Container
      shouldShowSidebar
      sideBarProps={{ onToggleExplorer: toggleExplorer }}
    >
      <div className="bg-white w-full h-full p-5">
        <h1 className="text-black">Posts</h1>
        <div className="grid md:grid-cols-3 grid-cols-2">
          {posts.map((post) => (
            <div
              className="flex flex-col border rounded-md bg-gray m-4 p-4"
              key={post.key}
            >
              <h3 className="text-black">{post.title}</h3>
              <div className="py-5">
                <p className="text-black">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts()

  return {
    props: {
      posts,
    },
  }
}

export default Dashboard
