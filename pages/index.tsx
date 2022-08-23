import { Hero } from 'components/sections/hero'
import { Services } from 'components/sections/services'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Services/>
    </>
  )
}

export default Home
