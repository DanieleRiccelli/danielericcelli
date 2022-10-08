import styles from "../styles/page.module.css";


export default function Page2() {
    return (
        <div className={styles.PageContainer}>
            <h2>Attualmente lavoro in</h2>
            <a href="https://www.nextadv.it" target="_blank"><img className={styles.imageNext} src="/nextlogo.png" width={400}/></a>
            <h4 className={styles.onlyDesk}>e mi occupo della realizzazione di siti web,<br/> principalmente in <span className={styles.color}>Wordpress</span> e <span className={styles.color}>NextJs</span></h4>
            <h4 className={styles.onlyMob}>e mi occupo della realizzazione <br/> di siti web, principalmente in <span className={styles.color}>Wordpress</span> e <span className={styles.color}>NextJs</span></h4>
        </div>
    )
}