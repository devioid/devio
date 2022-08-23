import { Home } from '@components/sections/home'
import { Platforms } from '@components/sections/platforms'
import { Services } from 'components/sections/services'
import type { NextPage } from 'next'

const Index: NextPage = () => {
  return (
    <>
      <Home />
      <Services />
      <Platforms />
    </>
  )
}

export default Index
