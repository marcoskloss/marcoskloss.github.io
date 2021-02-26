import { Navbar } from '../components/Navbar'
import styles from '../styles/pages/Home.module.scss'

export function Home() {
  return (
    <div class={styles.container}>
      <header>
        <Navbar />
      </header>
    </div>
  )
}