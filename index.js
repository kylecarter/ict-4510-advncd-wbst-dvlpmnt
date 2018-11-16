const express = require('express');
const next = require('next');
const httpProxy = require('http-proxy');

const DEV = process.env.NODE_ENV !== 'production'


const APP = next({ DEV })
const handle = APP.getRequestHandler()

const PROXY = httpProxy.createProxyServer({
  target: 'http://' + process.env.DJANGO_HOST + ':' + process.env.DJANGO_PORT,
  ws: true
});

APP.prepare().then(() => {
    const SERVER = express()
    SERVER.enable('trust proxy');

    SERVER.get('/admin', (req, res) => {
        console.log(req.path);
        PROXY.web(req, res, {target: (req.secure ? 'https://' : 'http://') + process.env.DJANGO_HOST + ':' + process.env.DJANGO_PORT});
    });

    SERVER.get('*', (req, res) => {
        handle(req, res)
    });

    SERVER.listen(process.env.PORT);
    console.log(`Node listening at port ${process.env.NODE_ENV}.`);
});