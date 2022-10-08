import '../styles/globals.css'
import Header from '/components/header/header.js'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from "../components/navbar/navbar";
import {useEffect} from "react";
function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader');
      if (loader)
        setTimeout(() => loader.style.display = 'none', 6000 ) ;
    }
  }, []);


  return<>
    <Header/>
    <div>
    <Navbar/></div>
    <Component {...pageProps} />
  </>
}

export default MyApp
