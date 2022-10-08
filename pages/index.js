import styles from '../styles/Home.module.css'
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";

export default function Home() {
    return (
        <div className="container">
            <Page1/>
            <Page2/>
            <Page3/>
        </div>
    )
}
