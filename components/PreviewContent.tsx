import React, { useEffect, useState } from 'react'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'

interface IPreviewContentProps {
  content: string
}

const PreviewContent: React.FC<IPreviewContentProps> = ({ content }) => {
  const [compiledContent, setCompiledContent] = useState<string>('')

  useEffect(() => {
    const compileToString = async () => {
      const source = await remark()
        .use(remarkHtml, { sanitize: false, quoteSmart: true })
        .use(remarkGfm)
        .process(content)

      setCompiledContent(source.toString())
    }

    compileToString()
  }, [content])

  return (
    <div
      id="preview"
      style={{
        flex: 1,
        backgroundColor: '#FAFAFA',
        padding: 20,
        overflow: 'scroll',
        wordBreak: 'break-word',
        whiteSpace: 'pre-wrap',
        resize: 'none',
        minWidth: 300,
      }}
    >
      <article
        className="prose"
        style={{
          color: 'black',
        }}
        dangerouslySetInnerHTML={{ __html: compiledContent }}
      />
    </div>
  )
}

export default PreviewContent
