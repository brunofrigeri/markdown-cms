import { useEffect } from 'react'
import Prism from 'prismjs'

require('prismjs/components/prism-javascript')
require('prismjs/components/prism-typescript')
require('prismjs/components/prism-python')
require('prismjs/components/prism-bash')
require('prismjs/components/prism-css')
require('prismjs/components/prism-jsx')
require('prismjs/components/prism-tsx')

/**
 * TODO: @brunofrigeri - Add user ability to add whatever prism syntax highlight they want to.
 */

export const useLivePrism = (content: string) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [content])
}
