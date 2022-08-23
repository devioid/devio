import logoWhite from '@assets/img/logo-white.png'
import styles from '@styles/layouts/navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className={styles.header}>
      <div className="container mx-auto flex h-full w-full flex-row items-center justify-between md:px-10">
        <div className="p relative my-auto h-9 w-28">
          <Image
            src={logoWhite}
            alt="Devio"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="hidden items-center justify-around gap-5 text-lg md:inline-flex">
          <p className="group cursor-pointer transition duration-300 ease-in-out">
            <Link href="#home">Home</Link>
            <span className="block h-0.5 max-w-0 rounded-xl bg-white transition-all duration-500 group-hover:max-w-full"></span>
          </p>
          <p className="group cursor-pointer transition duration-300 ease-in-out">
            <Link href="#services">Services</Link>
            <span className="block h-0.5 max-w-0 rounded-xl bg-white transition-all duration-500 group-hover:max-w-full"></span>
          </p>
          <p className="group cursor-pointer transition duration-300 ease-in-out">
            <Link href="#why">Why Us</Link>
            <span className="block h-0.5 max-w-0 rounded-xl bg-white transition-all duration-500 group-hover:max-w-full"></span>
          </p>
          <p className="group cursor-pointer transition duration-300 ease-in-out">
            <Link href="#works">Our Works</Link>
            <span className="block h-0.5 max-w-0 rounded-xl bg-white transition-all duration-500 group-hover:max-w-full"></span>
          </p>
          <button className={styles['btn-contact']}>Contact Us</button>
        </div>
      </div>
    </div>
  )
}
