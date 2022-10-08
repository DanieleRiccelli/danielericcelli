import styles from "../styles/page.module.css";


export default function Page3() {
    return (
        <div className={styles.PageContainer} id="contatti">
            <h2>Rimaniamo in contatto!</h2>
            <div className={styles.SocialContainer}>
                <a href="https://www.instagram.com/dan.ric95/" target="_blank"><img width={60} src="/instagram.svg"/></a>
                <a href="https://www.linkedin.com/in/danielericcelli/" target="_blank"><img width={60} src="/linkedin.svg"/></a>
                <a href="mailto:info@danielericcelli.it" target="_blank"><img width={60} src="/mail.svg"/></a>
            </div>
        </div>
    )
}