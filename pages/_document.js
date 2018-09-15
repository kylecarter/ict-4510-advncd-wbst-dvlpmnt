import Document, { Head, Main, NextScript } from 'next/document'
const defaultDescription = ''

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="robots" content="INDEX,FOLLOW" />
                    <meta name="HandheldFriendly" content="true" />
                    <link rel="stylesheet" href="/_next/static/style.css" />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}