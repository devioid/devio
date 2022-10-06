import { createContext, useEffect, useState } from 'react'
import { useWindowDimensions } from 'hooks'

export const ScrollContext = createContext({
  scroll: null,
})

export const ScrollProvider = ({ children }: { children: any }) => {
  const { height, width } = useWindowDimensions()
  const [scroll, setScroll] = useState<any>(null)

  useEffect(() => {
    if (!scroll) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      import('locomotive-scroll').then((LocomotiveScroll) => {
        setScroll(
          new LocomotiveScroll.default({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
            getDirection: true,
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          })
        )
      })
    } else {
      scroll.update()
      scroll.on('scroll', (instance: any) => {
        document.documentElement.setAttribute(
          'data-direction',
          instance.direction
        )

        if (width && width >= 786) {
          if (height && instance.scroll.y + height * 0.9 > height) {
            document.documentElement.setAttribute('data-more', 'true')
          } else {
            document.documentElement.setAttribute('data-more', 'false')
          }
        } else {
          if (height && instance.scroll.y + height * 0.96 > height) {
            document.documentElement.setAttribute('data-more', 'true')
          } else {
            document.documentElement.setAttribute('data-more', 'false')
          }
        }
      })
    }

    return () => {
      scroll && scroll.destroy()
    }
  }, [scroll])

  if (!scroll) {
    return <p>Loading...</p>
  }

  return (
    <ScrollContext.Provider value={scroll}>{children}</ScrollContext.Provider>
  )
}

ScrollContext.displayName = 'ScrollContext'
ScrollProvider.displayName = 'SmoothScrollProvider'
