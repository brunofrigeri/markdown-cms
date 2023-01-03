import { remark } from 'remark'
import remarkHtml from 'remark-html'
import remarkPrism from 'remark-prism'

export const compileRemarkOnSSR = async (content: string) => {
  return await remark()
    .use(remarkHtml, { sanitize: false, quoteSmart: true })
    .use(remarkPrism)
    .process(content)
}
