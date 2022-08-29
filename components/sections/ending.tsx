import Image from 'next/image'
import logoOutline from '@assets/img/logo-outline.png'

export const Ending = () => {
  return (
    <section
      className="relative h-96 lg:h-screen w-full bg-slate-100 px-4 py-2 text-primary"
      data-scroll-section
    >
      <div className="absolute left-4 top-5 bottom-5 w-[11%] lg:w-[12.8%] overflow-y-hidden">
        <Image src={logoOutline} alt="Devio" layout="responsive" />
      </div>

      <div className="absolute top-0 left-0 right-0 bottom-1/2 flex h-full flex-col justify-center text-center">
        <div>
          <h2 className="lg:mb-2 lg:text-5xl font-semibold text-lg sm:text-2xl">Yay, you have gone this far!</h2>
          <h2 className="mb-4 lg:mb-8 lg:text-5xl font-semibold text-lg sm:text-2xl">
            Are you ready to digitalize your idea?
          </h2>
          <p className="px-10 sm:px-28 lg:px-[27rem] text-base sm:text-xl lg:text-2xl">
            <span className="font-bold">Talk to us</span> through a message!
            Don't worry if you still not sure about the digital solution for
            your idea. You can discus it with us and we will choose a right
            service for your requirements!
          </p>
        </div>
      </div>

      <div className="absolute right-4 top-5 bottom-5 h-full w-[11%] lg:w-[12.8%] overflow-y-hidden">
        <Image
          src={logoOutline}
          alt="Devio"
          layout="responsive"
          className="rotate-180"
        />
      </div>
    </section>
  )
}
