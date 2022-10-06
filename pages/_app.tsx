import type { AppProps } from 'next/app'
import '../styles/globals.css'
import '../styles/locomotive-scroll.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div data-scroll-container>
      <Component {...pageProps} />
    </div>
  )
}

export default App
