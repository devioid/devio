import { Card } from "@components/card"
import { SectionHeader } from "@components/section-header"
import Image from "next/image"
import AvatarBlank from "@assets/img/avatar-blank.png"

export const Developer = () => {
  return (
    <section data-scroll-section className="">
      <SectionHeader title="Our Developer" description="Devio ID was initiated by passionated developer who willing to create product using current technologies!"></SectionHeader>
      <div className="container mx-auto flex w-full justify-center mb-20">
        <div className="grid gap-5 md:grid-cols-2 md:gap-10 xl:gap-10 px-10">
          <Card>
            <div className="flex gap-4 flex-col lg:flex-row items-center lg:items-left">
              <div className="w-[100px] md:min-w-[100px] md:max-w-[100px]">
                <Image src={AvatarBlank}></Image>
              </div>
              <div className="flex flex-col justify-center">
                <p className="xl:text-xl text-base font-normal">Gatum Erlangga</p>
                <p className="font-light">Interested in software development and machine learning technology</p>
                <div className="font-thin text-slate-500 mt-2 text-sm">
                  <a className="hover:text-slate-700 hover:font-medium" href="https://github.com/erlanggagatum">GitHub</a> |&nbsp;
                  <a className="hover:text-slate-700 hover:font-medium" href="https://instagram.com/erlanggagatum">Instagram</a> |&nbsp;
                  <a className="hover:text-slate-700 hover:font-medium" href="https://www.linkedin.com/in/gatum-erlangga-821564183/">LinkedIn</a>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex gap-4 flex-col lg:flex-row items-center lg:items-left">
              <div className="w-[100px] md:min-w-[100px] md:max-w-[100px]">
                <Image src={AvatarBlank}></Image>
              </div>
              <div className="flex flex-col justify-center">
                <p className="xl:text-xl text-base font-normal">Welson Oktario</p>
                <p className="font-light">Interested building app with advanced and current technology</p>
                <div className="font-thin text-slate-500 mt-2 text-sm">
                  <a className="hover:text-slate-700 hover:font-medium" href="https://github.com/welsonoktario">GitHub</a> |&nbsp;
                  <a className="hover:text-slate-700 hover:font-medium" href="https://instagram.com/welsonoktario">Instagram</a> |&nbsp;
                  <a className="hover:text-slate-700 hover:font-medium" href="https://www.linkedin.com/in/welsonoktario/">LinkedIn</a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
