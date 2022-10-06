import { Footer } from './footer'
import { Navbar } from './navbar'

export const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
