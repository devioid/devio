import { Hero } from 'components/sections/hero'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <Hero />
    </div>
  )
}

export default Home
