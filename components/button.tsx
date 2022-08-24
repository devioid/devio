import Image, { StaticImageData } from "next/image"
import { ReactElement, ReactNode } from "react"
import arrowRight from "@assets/img/arrow-right.svg"


export const Button = ({
  text,
  icon,
  // children
} : {
  text: String,
  icon? : ReactElement
  // children?: ReactNode
}) => {
  return (
    <button className="text-primary flex align-center hover:bg-slate-100 px-3 py-2 rounded-md">
      {/* {children} Button */}
      {text}
      <span className="ml-2 inline-flex w-6 h-6">
        {icon}
      </span>
    </button>
  )
}

