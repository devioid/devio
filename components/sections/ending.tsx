import Image from 'next/image'
import logoOutline from '@assets/img/logo-outline.png'

export const Ending = () => {
  return (
    <section
      className="relative mt-6 h-96 w-full overflow-hidden bg-slate-100 px-4 py-2 text-primary md:mt-0 lg:h-screen"
      data-scroll-section
    >
      <div
        data-scroll
        data-scroll-speed="-3"
        className="absolute left-4 top-5 bottom-5 w-[11%] overflow-y-hidden lg:w-[12.8%]"
      >
        <Image src={logoOutline} alt="Devio" layout="responsive" />
      </div>

      <div
        data-scroll
        data-scroll-speed="3"
        className="absolute top-0 left-0 right-0 bottom-1/2 flex h-full flex-col justify-center text-center"
      >
        <div>
          <h2 className="text-lg font-semibold sm:text-2xl lg:mb-2 lg:text-5xl">
            Yay, you have gone this far!
          </h2>
          <h2 className="mb-4 text-lg font-semibold sm:text-2xl lg:mb-8 lg:text-5xl">
            Are you ready to digitalize your idea?
          </h2>
          <p className="px-10 text-base sm:px-28 sm:text-xl lg:px-[27rem] lg:text-2xl">
            <span className="font-bold">Talk to us</span> through a message!
            Don't worry if you still not sure about the digital solution for
            your idea. You can discus it with us and we will choose a right
            service for your requirements!
          </p>
        </div>
      </div>

      <div
        data-scroll
        data-scroll-speed="8"
        className="absolute right-4 top-5 bottom-5 h-full w-[11%] overflow-y-hidden lg:w-[12.8%]"
      >
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
