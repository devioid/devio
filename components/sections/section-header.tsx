
// import Image from 'next/image'
// import consultation from '@assets/img/consultation.jpg'

export const SectionHeader = (props: { title: any, description: any }) => {
  return (
    <section className='w-full h-auto'>
      <div className='w-full font-medium space-y-3 md:space-y-4 h-auto py-10 md:py-20 bg-white flex flex-col items-center justify-center'>
        <h2 className='text-primary w-10/12 md:w-4/6 lg:w-5/12 text-3xl md:text-4xl text-center'>{props.title ?? "Title here"}</h2>
        <p className='font-normal text-primary text-sm md:text-lg w-5/6 md:w-3/6 text-center'>{props.description ?? ""}</p>
      </div>
    </section>
  )
}

export default SectionHeader
