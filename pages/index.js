import styles from '../styles/Home.module.css'
import Soon from "../components/soon/soon";


export default function Home() {
  return (
    <div className={styles.container}>
        <Soon/>
    </div>
  )
}
