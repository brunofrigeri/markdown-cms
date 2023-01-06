export type Post = {
  content: string
  date: string
  key: string //slug with .mdx
  slug: string //slug without it
  type: 'draft' | 'post'
  title: string
}
