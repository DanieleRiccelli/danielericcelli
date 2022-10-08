import React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'
import loader from "../src/loader";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head/>
                <head>
                    <style>
                        {loader}
                    </style>
                </head>
                <body>
                <div id={'globalLoader'}>
                    <img src="/dani.svg" width={200}/>
                    <section>
                        <div className="loading loading05">
                            <span className={"loaderText"}>JS</span>
                            <span className={"loaderText"}>&nbsp; | &nbsp;</span>
                            <span className={"loaderText"}>WP</span>
                            <span className={"loaderText"}>&nbsp; | &nbsp;</span>
                            <span className={"loaderText"}>React</span>
                            <span className={"loaderText"}>&nbsp; | &nbsp;</span>
                            <span className={"loaderText"}>NextJS</span>
                        </div>
                    </section>
                </div>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument