// import Image from 'next/image'
// import consultation from '@assets/img/consultation.jpg'
import styles from '@styles/components/section-header.module.css'

export const SectionHeader = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <div className={styles['section-header']}>
      <h2 className={styles['section-title']}>{title ?? 'Title here'}</h2>

      <p className={styles['section-description']}>{description ?? ''}</p>
    </div>
  )
}
