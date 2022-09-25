import { createContext, useEffect, useState } from 'react'
import useWindowDimensions from 'hooks/useWindowDimensions'

export const ScrollContext = createContext({
  scroll: null,
})

export const ScrollProvider = ({
  children,
  options,
}: {
  children: any
  options: any
}) => {
  const { height, width } = useWindowDimensions()
  const [scroll, setScroll] = useState<any>(null)

  useEffect(() => {
    if (!scroll) {
      ;(async () => {
        try {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const LocomotiveScroll = (await import('locomotive-scroll')).default

          setScroll((state: any) => {
            state = new LocomotiveScroll({
              el:
                document.querySelector('[data-scroll-container]') ?? undefined,
              ...options,
            })

            state.on('scroll', (instance: any) => {
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

            return state
          })
        } catch (error) {
          throw Error(`[SmoothScrollProvider]: ${error}`)
        }
      })()
    }

    return () => {
      scroll && scroll.destroy()
    }
  }, [scroll]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ScrollContext.Provider value={scroll}>{children}</ScrollContext.Provider>
  )
}

ScrollContext.displayName = 'ScrollContext'
ScrollProvider.displayName = 'SmoothScrollProvider'
