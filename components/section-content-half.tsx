import Image, { StaticImageData } from 'next/image'
import styles from '@styles/components/section-content-half.module.css'
import { ReactNode } from 'react'

export const SectionContentHalf = ({
  imageSrc,
  header,
  description,
  reverse,
  fullscreen,
  children,
}: {
  imageSrc: StaticImageData
  header: string
  description: string
  reverse?: boolean
  fullscreen?: boolean
  children?: ReactNode
}) => {

  // const sectionHeight = fullscreen ? "h-auto md:h-screen" : "h-auto md:h-screen"
  return (
    // <div className={`flex flex-row ${sectionHeight} w-full ` + (reverse && 'flex-row-reverse')}>
    <div className={`flex flex-row h-auto md:h-screen w-full ` + (reverse && 'flex-row-reverse')}>
      <div className={`h-0 md:h-full overflow-hidden bg-primary md:w-1/2 relative`}>
        <Image src={imageSrc} alt="image" layout='fill' objectFit='cover'></Image>
      </div>
      <div className="flex flex-col justify-center py-2 md:w-1/2 px-10 sm:px-20 lg:px-24 xl:px-40">
        <h3 className="pb-2 text-2xl lg:text-4xl text-primary">{header ?? 'Header'}</h3>
        <p className="mt-3 text-lg lg:text-2xl font-light leading-snug text-primary">
          {description ?? 'Description goes here'}
        </p>
        {children ? <span className='mt-3'>{children}</span> : ""}
      </div>
    </div>
  )
}
