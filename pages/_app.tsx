import '../styles/globals.css'
import type { AppProps } from 'next/app'
import FileProvider from '../contexts/FileProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FileProvider>
      <Component {...pageProps} />
    </FileProvider>
  )
}
