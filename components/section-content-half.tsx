import Image, { StaticImageData } from 'next/image'
import styles from '@styles/components/section-content-half.module.css'

export const SectionContentHalf = ({
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
  return (
    <div className={'flex h-auto w-full ' + (reverse && 'flex-row-reverse')}>
      <div className="h-full overflow-hidden bg-primary md:w-1/2">
        <Image src={imageSrc} alt="image" layout="responsive"></Image>
      </div>
      <div className="flex flex-col justify-center py-2 px-10 md:w-1/2 md:px-40">
        <h3 className="pb-2 text-4xl text-primary">{header ?? 'Header'}</h3>
        <p className="mt-3 text-2xl font-light leading-snug text-primary">
          {description ?? 'Description goes here'}
        </p>
      </div>
    </div>
  )
}
