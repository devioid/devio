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
    <div
      className={
        `flex h-auto w-full flex-row md:h-screen ` +
        (reverse && 'flex-row-reverse')
      }
    >
      <div
        className={`relative h-0 overflow-hidden bg-primary md:h-full md:w-1/2`}
      >
        <Image
          src={imageSrc}
          alt={header}
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
      <div className="flex flex-col justify-center py-2 px-10 sm:px-20 md:w-1/2 lg:px-24 xl:px-40">
        <h3 className="pb-2 text-2xl text-primary lg:text-4xl">
          {header ?? 'Header'}
        </h3>
        <p className="mt-3 text-lg font-light leading-snug text-primary lg:text-2xl">
          {description ?? 'Description goes here'}
        </p>
        {children ? <span className="mt-3">{children}</span> : ''}
      </div>
    </div>
  )
}
