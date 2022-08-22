import Image from 'next/image'
import styles from '@styles/components/hero.module.css'
import landing from '@assets/img/landing-illustration.svg'

export const Hero = () => {
  return (
    <section
      className="w-full bg-gradient-to-br from-primary to-primary-light px-8 pt-32 md:max-h-screen md:min-h-screen md:px-0 md:py-8 md:pt-10"
      data-scroll-section
    >
      <div className="container mx-auto flex min-h-screen flex-col items-center gap-4 px-10 md:flex-row">
        <div className="my-auto w-full flex-1">
          <h6 className="mb-1 text-2xl font-medium tracking-wide text-amber-200">
            Welcome
          </h6>
          <h1 className="text-4xl font-medium text-zinc-50 md:text-5hxl md:leading-tight lg:text-5hxl lg:leading-tight">
            We are app developer based in Indonesia
          </h1>
          <p className="my-6 text-lg text-zinc-200 md:leading-6">
            Develop fully customize application based on client&apos;s unique
            requirements. Not sure about your business decision? No worry, we
            will help you!
          </p>

          <div className="inline-flex">
            <button className={styles['btn-contact']}>Contact Us</button>
            <button className={styles['btn-explore']}>Explore More</button>
          </div>
        </div>
        <div className="my-auto flex-1">
          <Image
            src={landing}
            alt="Test"
            className="w-100% h-auto rounded-lg shadow-lg"
            width={600}
            height={500}
          />
        </div>
      </div>
    </section>
  )
}
