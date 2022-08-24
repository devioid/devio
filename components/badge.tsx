import { ReactNode } from "react"


export const Badge = ({
  children
}: {
  children?: ReactNode
}) => {

  return (
    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
      {children ?? children}
    </span>
  )
}
