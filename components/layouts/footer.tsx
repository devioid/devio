import ig from '@assets/img/ig.svg'
import logo from '@assets/img/logo-white.png'
import web from '@assets/img/web.svg'
import { ScrollContext } from 'contexts/scroll'
import Image from 'next/image'
import { useContext } from 'react'

export const Footer = () => {
  const scroll = useContext<any>(ScrollContext)

  const scrollTo = (id: string) => {
    const target = document.querySelector(id)
    scroll.scrollTo(target)
  }

  return (
    <footer className="h-[36vh] bg-primary md:h-[42vh]" data-scroll-section>
      <div className="h-full p-10 text-lg font-light text-white md:mx-40 md:flex md:flex-row md:items-center md:justify-between md:p-0">
        <div className="inline-flex flex-col">
          <div className="md:w-100 mb-10 w-32">
            <Image src={logo} alt="Devio" layout="responsive" />
          </div>
          <p className="mb-2 hidden items-center gap-2 md:inline-flex">
            <Image
              src={ig}
              alt="Instagram"
              layout="fixed"
              className="h-4 w-auto"
            />
            devio.id
          </p>
          <p className="hidden items-center gap-2 md:inline-flex">
            <Image
              src={web}
              alt="Website"
              layout="fixed"
              className="h-4 w-auto"
            />
            www.devio.id
          </p>
        </div>

        <div className="flex flex-row-reverse justify-between gap-x-4 text-xs md:mr-10 md:flex-row md:justify-end md:gap-x-44 md:text-base">
          <div className="flex flex-col">
            <p className="mb-4 font-medium md:mb-6">Links</p>
            <button className="text-start" onClick={() => scrollTo('#home')}>
              Home
            </button>
            <button
              className="text-start"
              onClick={() => scrollTo('#services')}
            >
              Services
            </button>
            <button className="text-start" onClick={() => scrollTo('#why-us')}>
              Why Us
            </button>
            <button
              className="text-start"
              onClick={() => scrollTo('#how-do-we-works')}
            >
              How do we Work
            </button>
            <button className="text-start" onClick={() => scrollTo('#works')}>
              Our Works
            </button>
          </div>

          <div className="flex flex-col">
            <p className="mb-4 font-medium md:mb-6">Contact</p>
            <p className="break-all">E. ideviocorp&#64;gmail.com</p>
            <p>T. &#8211;</p>
            <p className="mt-5 md:mt-4">&copy; Devio 2022</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
