import logoWhite from '@assets/img/logo-white.png'
import styles from '@styles/layouts/navbar.module.css'
import { ScrollContext } from 'contexts/scroll'
import Image from 'next/image'
import { useContext, useState } from 'react'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scroll = useContext<any>(ScrollContext)

  const scrollTo = (id: string) => {
    const target = document.querySelector(id)
    scroll.scrollTo(target)
  }

  return (
    <div className={styles.header}>
      <div className="container mx-auto flex h-full w-full flex-row items-center justify-between md:px-10">
        <div className="relative my-auto h-9 w-28">
          <Image
            src={logoWhite}
            alt="Devio"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="hidden items-center justify-around gap-5 text-lg text-white md:inline-flex">
          <p className="group cursor-pointer transition duration-300 ease-in-out">
            <button onClick={() => scrollTo('#home')}>Home</button>
            <span className="block h-0.5 max-w-0 rounded-xl bg-white transition-all duration-500 group-hover:max-w-full"></span>
          </p>
          <p className="group cursor-pointer transition duration-300 ease-in-out">
            <button
              onClick={(e) => {
                e.preventDefault()
                scrollTo('#services')
              }}
            >
              Services
            </button>
            <span className="block h-0.5 max-w-0 rounded-xl bg-white transition-all duration-500 group-hover:max-w-full"></span>
          </p>
          <p className="group cursor-pointer transition duration-300 ease-in-out">
            <button onClick={() => scrollTo('#why-us')}>Why Us</button>
            <span className="block h-0.5 max-w-0 rounded-xl bg-white transition-all duration-500 group-hover:max-w-full"></span>
          </p>
          <p className="group cursor-pointer transition duration-300 ease-in-out">
            <button onClick={() => scrollTo('#works')}>Our Works</button>
            <span className="block h-0.5 max-w-0 rounded-xl bg-white transition-all duration-500 group-hover:max-w-full"></span>
          </p>
          <button className={styles['btn-contact']}>Contact Us</button>
        </div>

        {/* mobile menu toggle */}
        <button
          className="text-2xl font-light md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          &#x2630;
        </button>
      </div>

      {/* mobile menu */}
      <div
        className={
          isMenuOpen ? styles['header-sm'] : styles['header-sm-hidden']
        }
      >
        <p className="group my-1 cursor-pointer transition duration-300 ease-in-out">
          <button onClick={() => scrollTo('#home')}>Home</button>
          <span className="block h-0.5 max-w-0 rounded-xl bg-white transition-all duration-500 group-hover:max-w-full"></span>
        </p>
        <p className="group my-1 cursor-pointer transition duration-300 ease-in-out">
          <button onClick={() => scrollTo('#services')}>Services</button>
          <span className="block h-0.5 max-w-0 rounded-xl bg-white transition-all duration-500 group-hover:max-w-full"></span>
        </p>
        <p className="group my-1 cursor-pointer transition duration-300 ease-in-out">
          <button onClick={() => scrollTo('#why-us')}>Why Us</button>
          <span className="block h-0.5 max-w-0 rounded-xl bg-white transition-all duration-500 group-hover:max-w-full"></span>
        </p>
        <p className="group my-1 cursor-pointer transition duration-300 ease-in-out">
          <button onClick={() => scrollTo('#works')}>Our Works</button>
          <span className="block h-0.5 max-w-0 rounded-xl bg-white transition-all duration-500 group-hover:max-w-full"></span>
        </p>
        <button className={styles['btn-contact']}>Contact Us</button>
      </div>
    </div>
  )
}
