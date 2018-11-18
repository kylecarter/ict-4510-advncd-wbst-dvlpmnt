'use strict'

// Node Modules
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html className="no-js">
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="robots" content="INDEX,FOLLOW" />
                    <meta name="HandheldFriendly" content="true" />
                    <link rel="canonical" href="http://localhost:3000" />
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i|PT+Serif:400,400i,700,700i|Courgette" rel="stylesheet" />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous" />
                    <link rel="stylesheet" href="/_next/static/style.css" />
                </Head>
                <body>
                    <div id="page-content"><Main /></div>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                    <NextScript />
                </body>
            </html>
        )
    }
}