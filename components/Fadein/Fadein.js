import styles from "./Fadein.module.css"

function Fadein() {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.hideMob}>
                <h1 className={styles.pt1}>Ciao sono Daniele Riccelli<span style={{"opacity": "0"}}>.</span></h1>
                <h1 className={styles.pt2}>e sono un Web Developer.<span className={styles.span}>|</span></h1>
            </div>
            <div className={styles.showMob}>
                <h1 className={styles.pt1}>Ciao sono Daniele Riccelli<span style={{"opacity": "0"}}>.</span></h1>
                <h1 className={styles.pt2}>e sono un Web Developer.<span className={styles.span}>|</span></h1>
            </div>

        </div>

        </>
    )
}

export default Fadein