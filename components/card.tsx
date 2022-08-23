import styles from '@styles/components/card.module.css'

export const Card = ({ title, body }: { title: string; body: string }) => {
  return (
    <div className={styles.card}>
      <div className={styles['card-title']}>{title}</div>
      <p className={styles['card-body']}>{body}</p>
    </div>
  )
}
