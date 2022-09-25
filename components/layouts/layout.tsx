import { ScrollProvider } from 'contexts/scroll'
import useWindowDimensions from 'hooks/useWindowDimensions'
import { Footer } from './footer'
import { Navbar } from './navbar'

export const Layout = ({ children }: any) => {
  const { height } = useWindowDimensions()

  /* useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    import('locomotive-scroll').then((locomotiveModule) => {
      setScroll((state: any) => {
        state = new locomotiveModule.default({
          el: document.querySelector('[data-scroll-container]'),
          smooth: true,
          getDirection: true,
        })

        state.on('scroll', (instance: any) => {
          document.documentElement.setAttribute(
            'data-direction',
            instance.direction
          )

          if (height && instance.scroll.y + height * 0.15 > height) {
            document.documentElement.setAttribute('data-more', 'true')
          } else {
            document.documentElement.setAttribute('data-more', 'false')
          }
        })

        return state
      })
    })

    return () => {
      if (scroll) scroll.destroy()
    }
  }, []) */

  return (
    <div data-scroll-container>
      <ScrollProvider options={{ smooth: true, getDirection: true }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </ScrollProvider>
    </div>
  )
}
