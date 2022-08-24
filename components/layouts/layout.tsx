import useWindowDimensions from 'hooks/useWindowDimensions'
import { useEffect } from 'react'
import { Footer } from './footer'
import { Navbar } from './navbar'

export const Layout = ({ children }: any) => {
  const { height } = useWindowDimensions()

  useEffect(() => {
    let scroll: any
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    import('locomotive-scroll').then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        getDirection: true,
      })

      scroll.on('scroll', (instance: any) => {
        document.documentElement.setAttribute(
          'data-direction',
          instance.direction
        )
      })
    })

    return () => {
      if (scroll) scroll.destroy()
    }
  }, [])

  return (
    <>
      <Navbar />
      <div data-scroll-container>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
