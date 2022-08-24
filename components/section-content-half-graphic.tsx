import Image, { StaticImageData } from 'next/image'

export const SectionContentHalfGraphic = ({
  imageSrc,
  header,
  description,
  reverse,
}: {
  imageSrc: StaticImageData
  header: string
  description: string
  reverse?: boolean
}) => {
  // Posisi grafiknya
  const imagePosition = !reverse ? "ml-0 md:ml-20 lg:ml-40" :
    "mr-0 md:mr-20 lg:mr-40"

  return (
    <div className={'flex h-auto w-full ' + (reverse && 'flex-row-reverse')}>
      {/* <div className="h-full overflow-hidden bg-transparent md:w-1/2 ml-0 md:ml-20 lg:ml-40"> */}
      <div className={"h-full overflow-hidden bg-transparent md:w-1/2 " + imagePosition}>
        <Image src={imageSrc} alt="image" className='' objectFit='contain' layout="responsive"></Image>
      </div>
      <div className="flex flex-col justify-center py-2 md:w-1/2 px-10 sm:px-16 lg:px-24 xl:px-40">
        <h3 className="pb-2 text-2xl lg:text-3xl xl:text-4xl text-primary">{header ?? 'Header'}</h3>
        <p className="mt-3 text-lg lg:text-xl xl:text-2xl font-light leading-snug text-primary">
          {description ?? 'Description goes here'}
        </p>
      </div>
    </div>
  )
}
