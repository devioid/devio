import Image from 'next/image'

export const Hero = () => {
  return (
    <section
      className="w-full pt-16 mx-8 md:px-0 md:py-8 md:min-h-screen md:max-h-screen flex flex-col md:flex-row gap-4"
      data-scroll-section
    >
      <div className="w-full my-auto">
        <h1 className="text-slate-800 text-4xl md:text-5xl lg:text-7xl font-semibold md:leading-tight">
          Complete IT Solution for Your Business
        </h1>
        <p className="my-4 text-lg lg:text-xl md:leading-6 text-slate-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className="my-auto">
        <Image
          src={'https://picsum.photos/600/500'}
          className="rounded-lg shadow-lg w-100% h-auto"
          width={600}
          height={500}
        />
      </div>
    </section>
  )
}
