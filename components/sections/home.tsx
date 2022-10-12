import Image from 'next/image'
import styles from '@styles/components/sections/home.module.css'
import landing from '@assets/img/landing-illustration.webp'
import arrowRight from '@assets/img/arrow-right.svg'

export const Home = () => {
  return (
    <section
      id="home"
      className="w-full bg-gradient-to-br from-primary to-primary-light px-8 pt-24 md:max-h-screen md:min-h-screen md:px-0 md:py-8 md:pt-10"
      data-scroll-section-id="home"
      data-scroll-section
    >
      <div className="container mx-auto flex flex-col items-center gap-4 pb-10 sm:h-auto md:h-screen md:flex-row md:px-10">
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
            <button className={styles['btn-explore']}>
              Explore More
              <Image src={arrowRight} alt="Explore More" />
            </button>
          </div>
        </div>
        <div className="my-auto hidden lg:flex lg:flex-1">
          <Image
            src={landing}
            alt="Welcome to Devio"
            className="w-100% h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
