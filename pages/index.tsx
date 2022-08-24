import { Home } from '@components/sections/home'
import { Platforms } from '@components/sections/platforms'
import { Services } from 'components/sections/services'
import { WhyUs } from 'components/sections/why-us'
import type { NextPage } from 'next'

const Index: NextPage = () => {
  return (
    <>
      <Home />
      <Services />
      <Platforms />
      <WhyUs />
    </>
  )
}

export default Index
