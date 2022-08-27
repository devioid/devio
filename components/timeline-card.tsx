type TimelimeCardProps = {
  position: 'left' | 'center' | 'right' | string
  no: number
  title: string
  body: string
}

export const TimelineCard = ({
  position,
  no,
  title,
  body,
}: TimelimeCardProps) => {
  const pos =
    position === 'left'
      ? 'left-0 right-1/2'
      : position === 'center'
      ? 'left-0 right-0'
      : 'left-1/2 right-0'

  return (
    <div className="text-center">
      <div className="relative mb-20 inline-flex w-full justify-center">
        <div
          className={`top-[1.65rem] my-auto hidden h-3 bg-amber-400 md:absolute ${pos}`}
        ></div>
        <span className="absolute inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400 text-center text-3xl font-bold text-white">
          {no}
        </span>
      </div>

      <div className="px-10 md:px-24">
        <p className="mb-2 text-2xl font-medium">{title}</p>
        <p className="font-light">{body}</p>
      </div>
    </div>
  )
}
