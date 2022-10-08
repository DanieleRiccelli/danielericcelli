import styles from "../styles/page.module.css";


export default function Page1() {
    return (
        <div className={styles.PageContainer}>
            <h1>Ciao sono Daniele <br/>
                e sono un <span className={styles.color}>Web Developer</span></h1>
            <h2 className={styles.onlyDesk}>Ho iniziato questa avventura 1 anno fa<br/>
                e da quel momento miglioro le mie skill giorno dopo giorno</h2>
            <h2 className={styles.onlyMob}>Ho iniziato questa avventura <br/>
                1 anno fa e da quel momento miglioro le mie skill giorno <br/>dopo giorno</h2>
        </div>
    )
}