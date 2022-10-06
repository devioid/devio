import { Card } from '@components/card'
import { SectionHeader } from '@components/section-header'
import { useWindowDimensions } from 'hooks'

export const Platforms = () => {
  const { width } = useWindowDimensions()
  const isMobile = width && width <= 768

  return (
    <section
      id="platforms"
      className="container mx-auto mt-16 flex w-full justify-center pb-16"
      data-scroll-section
    >
      <div className="container">
        <SectionHeader
          title="Supported Platform"
          description="We implement your idea into web, mobile and desktop app"
        />

        <div className="grid gap-5 px-8 md:grid-cols-3 md:px-10 xl:gap-20">
          <Card
            title="Web Application 🌐"
            body="Web application is an app running on website, so, user don't need
          install any application on their device. It suitable for an app that
          have multiple users."
            options={{
              scroll: width && isMobile ? false : true,
              direction: 'horizontal',
              speed: 1,
            }}
          />
          <Card
            title="Native Mobile App 📱"
            body="Native mobile app is a mobile application that can run on multiple operating system (Android and IOS). It suitable for app that need mobility."
            options={{
              scroll: width && isMobile ? false : true,
              direction: 'vertical',
              speed: 0,
            }}
          />
          <Card
            title="Desktop App 🖥️"
            body="Desktop app is an app running on your physical computer. It suitable for internal purpose like cashier application"
            options={{
              scroll: width && isMobile ? false : true,
              speed: -1,
              direction: 'horizontal',
            }}
          />
        </div>
      </div>
    </section>
  )
}
