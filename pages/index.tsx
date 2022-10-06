import { Layout } from '@components/layouts/layout'
import { Ending } from '@components/sections/ending'
import { Home } from '@components/sections/home'
import { HowDoWeWork } from '@components/sections/how-do-we-work'
import { Platforms } from '@components/sections/platforms'
import { Showcase } from '@components/sections/showcase'
import { Services } from 'components/sections/services'
import { WhyUs } from 'components/sections/why-us'
import { ScrollProvider } from 'contexts/scroll'
import type { NextPage } from 'next'

const Index: NextPage = () => {
  return (
    <ScrollProvider>
      <Layout>
        <Home />
        <Services />
        <Platforms />
        <WhyUs />
        <HowDoWeWork />
        <Showcase />
        <Ending />
      </Layout>
    </ScrollProvider>
  )
}

export default Index
