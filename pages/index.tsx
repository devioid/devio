import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <section
        className="w-full h-screen flex items-center"
        data-scroll-section
      >
        <div
          data-scroll
          data-scroll-speed="2"
          className="bg-indigo-400 mx-8 w-full h-full my-auto rounded-md"
        />
        <div
          data-scroll
          data-scroll-speed="4"
          className="bg-red-400 mx-8 w-full h-52 my-auto rounded-md"
        />
      </section>

      <div className="w-full h-screen" data-scroll-section>
        <div className="bg-indigo-400 mx-8 w-full h-52 my-auto rounded-md" />
      </div>

      <div className="w-full h-screen" data-scroll-section>
        <div className="bg-indigo-400 mx-8 w-full h-52 my-auto rounded-md" />
      </div>

      <div className="w-full h-screen" data-scroll-section>
        <div className="bg-indigo-400 mx-8 w-full h-52 my-auto rounded-md" />
      </div>
    </div>
  )
}

export default Home
