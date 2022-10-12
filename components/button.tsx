import { ReactElement } from 'react'

export const Button = ({
  text,
  icon,
}: // children
{
  text: String
  icon?: ReactElement
  // children?: ReactNode
}) => {
  return (
    <button className="align-center flex rounded-md px-3 py-2 text-primary hover:bg-slate-100">
      {/* {children} Button */}
      {text}
      <span className="ml-2 inline-flex h-6 w-6">{icon}</span>
    </button>
  )
}
