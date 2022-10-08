import Head from 'next/head'

function Header() {
    return (
            <Head>
                <title>Daniele Riccelli - Web Developer</title>
                <meta name="description" content="Il mio personale portfolio" />
                <meta property="og:title" content="Daniele Riccelli - Web Developer" />
                <meta property="og:description" content="Il mio personale portfolio" />
                <meta property="og:url" content="https://www.danielericcelli.it" />
                <meta property="og:type" content="website" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
    )
}

export default Header