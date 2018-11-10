'use strict'

// Node Modules
import Document, { Head, Main, NextScript } from 'next/document'

// Components
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="robots" content="INDEX,FOLLOW" />
                    <meta name="HandheldFriendly" content="true" />
                    <link rel="canonical" href="http://localhost:3000" />
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i|PT+Serif:400,400i,700,700i" rel="stylesheet" />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous" />
                    <link rel="stylesheet" href="/_next/static/style.css" />
                </Head>
                <body><div id="page-content">
                    <Navigation />
                    <Main />
                    <Footer /></div>
                    <NextScript />
                </body>
            </html>
        )
    }
}