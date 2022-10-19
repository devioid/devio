import styles from '@styles/components/card.module.css'

type ScrollOptions = {
  scroll?: boolean | false
  speed?: number | 1
  delay?: number | 1
  direction?: string | null
}

export const Card = ({
  title,
  body,
  options,
  children,
}: {
  title?: string
  body?: string
  options?: ScrollOptions
  children?: any
}) => {

  const content = children ??
    <><div className={styles['card-title']}>{title}</div> <p className={styles['card-body']}>{body}</p></>
  return (
    <div
      data-scroll={options && options.scroll}
      data-scroll-speed={options && options.speed}
      data-scroll-delay={options && options.delay}
      data-scroll-direction={options && options.direction}
      className={styles.card}
    >
      {content}
    </div>
  )
}
