import '../styles/globals.css'
import Header from '/components/header/header.js'
import Footer from "../components/footer/footer";
function MyApp({ Component, pageProps }) {
  return<>
    <Header/>
    <Component {...pageProps} />
  </>
}

export default MyApp
