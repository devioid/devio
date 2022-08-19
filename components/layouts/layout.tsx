import { useEffect, useState } from 'react'
import { Footer } from './footer'
import { Navbar } from './navbar'

export const Layout = ({ children }: any) => {
  const [direction, setDirection] = useState('up')

  useEffect(() => {
    let scroll: any
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    import('locomotive-scroll').then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        smoothMobile: false,
        resetNativeScroll: true,
        repeat: true,
        getDirection: true,
      })

      scroll.on('scroll', (e: any) => {
        if (e.direction !== direction) {
          setDirection(e.direction)
        }
      })
    })

    return () => {
      if (scroll) scroll.destroy()
    }
  })

  return (
    <div data-scroll-container>
      <Navbar className={direction === 'down' ? 'hidden' : ''} />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  )
}
