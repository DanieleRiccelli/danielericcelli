import '../styles/globals.css'
import Header from '/components/header/header.js'
function MyApp({ Component, pageProps }) {
  return<>
    <Header/>
    <Component {...pageProps} />
  </>
}

export default MyApp
