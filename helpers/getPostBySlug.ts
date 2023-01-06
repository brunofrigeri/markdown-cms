import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { postDirectory } from '.'
import { Post } from './types'

export const getPostBySlug = async (slug?: string) => {
  if (slug) {
    const fullPath = path.join(postDirectory, `${slug}.mdx`)
    const postContent = fs.readFileSync(fullPath, 'utf8')

    const { data, content } = matter(postContent)
    const post = {
      content,
      date: data.date,
      slug,
      key: `${slug}.mdx`,
      type: Boolean(data?.draft) ? 'draft' : 'post',
      title: data.title,
    } satisfies Post

    return post
  }
}
