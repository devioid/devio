import { Card } from '@components/card'
import { SectionHeader } from '@components/section-header'

export const Platforms = () => {
  return (
    <section className="flex justify-center mt-16 w-full pb-16" data-scroll-section>
      <div className='container'>
        <SectionHeader
          title="Supported Platform"
          description="We can implement your idea into web, mobile and desktop app" />

        <div className="grid md:grid-cols-3 gap-5 xl:gap-20 px-8 md:px-10">
          <Card
            title="Web Application 🌐"
            body="Web application is an app running on website, so, user don't need
          install any application on their device. It suitable for an app that
          have multiple users."
          />
          <Card
            title="Native Mobile App 📱"
            body="Native mobile app is a mobile application that can run on multiple operating system (Android and IOS). It suitable for app that need mobility."
          />
          <Card
            title="Desktop App 🖥️"
            body="Desktop app is an app running on your physical computer. It suitable for internal purpose like cashier application"
          />
        </div>
      </div>
    </section>
  )
}
