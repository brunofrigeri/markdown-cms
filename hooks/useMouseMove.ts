import { useCallback, useEffect, useState } from 'react'

export const useMouseMove = () => {
  const [isDraggingRight, setIsDraggingRight] = useState<boolean>(false)

  const onMouseDown = (event: MouseEvent) => {
    if ((event.target as HTMLElement).id === 'handlerMarkdownAndPreview') {
      event.preventDefault()
      setIsDraggingRight(true)
    }
  }

  const onMouseMove = useCallback(
    (event: MouseEvent) => {
      if (isDraggingRight) {
        event.preventDefault()
        const handlerFilesNMarkdown = document.querySelector(
          '#handlerMarkdownAndPreview'
        )

        const container = handlerFilesNMarkdown?.parentElement
        const previewElement = container?.querySelector(
          '#preview'
        ) as HTMLElement

        const minWidth = 300
        // For just two columns uses 1.5, for three, uses 2
        const maxWidth = window.innerWidth / 1.5

        const clientX = (container?.clientWidth ?? 0) - event.clientX

        if (previewElement) {
          previewElement.style.flex = '1 1 auto'
          previewElement.style.width =
            (clientX > maxWidth ? maxWidth : Math.max(clientX, minWidth)) + 'px'
          previewElement.style.flexGrow = '0'
        }
      } else {
        return false
      }
    },
    [isDraggingRight]
  )

  const onMouseUp = () => {
    setIsDraggingRight(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)

    return () => {
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }
  }, [onMouseMove])
}
