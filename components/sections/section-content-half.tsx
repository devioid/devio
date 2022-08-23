
import Image from 'next/image'
import consultation from '@assets/img/consultation.jpg'


export const SectionContentHalf = (props: {reverse: boolean, imageSrc: any, header: string, description: string}) => {
  return (
    <section className="w-full h-auto">

      <div className={"flex h-auto w-full " + (props.reverse ? "flex-row-reverse" : "")}>
        <div className='h-auto md:w-1/2 bg-primary overflow-hidden'>
          <Image
            src={props.imageSrc}
            alt="image"
            layout='responsive'
            // className=''
            >
          </Image>
        </div>
        <div className='flex md:w-1/2 flex-col justify-center py-2 px-10 md:px-30 lg:px-36'>
          <h3 className='text-2xl text-primary'>{props.header ?? "Header"}</h3>
          <p className='lg:text-md text-sm  mt-3 text-primary'>
            {props.description ?? "Description goes here"}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SectionContentHalf
