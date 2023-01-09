import { GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'
import Container from '../containers/Container'
import { getAllPosts } from '../helpers/getAllPosts'
import { Post } from '../helpers/types'
import { FaArrowRight } from 'react-icons/fa'

interface IDashboardProps {
  posts: Post[]
}

const Dashboard = ({ posts = [] }: IDashboardProps) => {
  return (
    <Container className="overflow-y-auto bg-white mt-14 min-h-screen">
      <div className="flex-1 p-5">
        <div className="flex flex-row justify-between mb-4">
          <h1 className="text-black">Posts</h1>

          <button className="bg-blue px-2 rounded-md py-0 text-white text-semibold">
            Create Post
          </button>
        </div>
        <div className="grid max-sm:grid-cols-2 grid-cols-3 gap-4">
          {posts.map((post) => (
            <Link
              href={`/editor/${post.slug}`}
              className={`flex flex-col justify-between border rounded-md bg-gray p-4`}
              key={post.key}
            >
              <div>
                <h3 className="text-black mb-4">{post.title}</h3>
                <p className="text-black">{post.date}</p>
              </div>
              <FaArrowRight className="self-end" color="black" />
            </Link>
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
