import styles from '../styles/components/Navbar.module.scss'

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <nav>
        <button className={styles.button}>Home</button>
        <button className={styles.button}>Sobre</button>
        <button className={styles.button}>Projetos</button>
      </nav>

      <div className={styles.social}>
        <img src="/assets/svg/github.svg" alt="Github" />
        <img src="/assets/svg/linkedin.svg" alt="Linkedin" />
      </div>
    </div>
  )
}