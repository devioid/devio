import { useEffect, useState } from 'react'
import { Footer } from './footer'
import { Navbar } from './navbar'

export const Layout = ({ children }: any) => {
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
    })

    return () => {
      if (scroll) scroll.destroy()
    }
  })

  return (
    <div data-scroll-container>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
