import { Layout } from '@components/layouts/layout'
import { Ending } from '@components/sections/ending'
import { Home } from '@components/sections/home'
import { HowDoWeWork } from '@components/sections/how-do-we-work'
import Loading from '@components/sections/loading'
import { Platforms } from '@components/sections/platforms'
import { Showcase } from '@components/sections/showcase'
import { Services } from 'components/sections/services'
import { WhyUs } from 'components/sections/why-us'
import { Developer } from '@components/sections/developers'
import { ScrollProvider } from 'contexts/scroll'
import type { NextPage } from 'next'
import Head from 'next/head'

const Index: NextPage = () => {
  return (
    <ScrollProvider>
      <Head>
        <title>Devio ID</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Develop fully customize application based on client's unique requirements. Not sure about your business decision? No worry, we will help you!"
        ></meta>
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English"></meta>
        <meta http-equiv="content-language" content="en" />
      </Head>

      {/* <Loading/> */}

      <Layout>
        <Home />
        <Services />
        <Platforms />
        <WhyUs />
        <HowDoWeWork />
        <Showcase />
        <Developer />
        <Ending />
      </Layout>
    </ScrollProvider>
  )
}

export default Index
