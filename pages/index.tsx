import { GetStaticProps } from 'next'
import React from 'react'
import Container from '../containers/Container'
import { getAllPosts } from '../helpers/getAllPosts'
import { Post } from '../helpers/types'
import { ArrayGroupedBy } from '../helpers/arrayGroupBy'
import Files from '../components/Files'

interface IDashboardProps {
  groups: ArrayGroupedBy<Post>
}

const Dashboard = ({ groups = [] }: IDashboardProps) => {
  return (
    <Container className="overflow-y-auto bg-white mt-14 min-h-screen pb-14">
      <div className="flex p-5">
        <div className="flex flex-col">
          {groups.map(({ key, data }) => (
            <Files key={key} type={key as Post['type']} files={data} />
          ))}
        </div>
      </div>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const groups = await getAllPosts()

  return {
    props: {
      groups,
    },
  }
}

export default Dashboard
