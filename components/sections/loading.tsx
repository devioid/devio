
import Image from "next/image";
import LogoWhite from "@assets/img/logo-white.png"

const Loading = () => {
  return (
    <section className='p-10 bg-gradient-to-r from-slate-800 to-sky-900 text-center gap-5 flex-col flex w-screen h-screen items-center justify-center'>
      <div className="align-bottom">
        <Image
          src={LogoWhite}
          className="animate-pulse"
          >
        </Image>
      </div>
      <p className="text-gray-400 font-thin">Please wait, we're preparing content for you!</p>
    </section>
  )
}

export default Loading;
