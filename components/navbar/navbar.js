import styles from "./navbar.module.css"

function Navbar() {
    return (
        <div className={styles.NavContainer}>
            <img src="/dani.svg" width={100} />
            <ul className={styles.navContainer}>
                <li><a className={styles.navLink} href="#contatti">Contatti</a></li>
            </ul>
        </div>
    )
}

export default Navbar