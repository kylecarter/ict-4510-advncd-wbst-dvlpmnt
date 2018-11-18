const express = require('express');
const next = require('next');
const httpProxy = require('http-proxy');
const cookieParser = require('cookie-parser');
const axios = require('axios');

const DEV = process.env.NODE_ENV !== 'production';
const APP = next({ DEV });
const handle = APP.getRequestHandler();

const PROXY = httpProxy.createProxyServer({
  target: 'http://' + process.env.DJANGO_HOST + ':' + process.env.DJANGO_PORT,
  ws: true
});

APP.prepare().then(() => {
    const SERVER = express()
    SERVER.enable('trust proxy');
    SERVER.use(cookieParser());

    SERVER.get('/api/v1/instagram', (req, res)=> {
        INSTA.get(`tags/${req.query.q}/media/recent`, { client_id: process.env.INSTAGRAM_CLIENT_ID }, (err, data) => {
            if (err) console.error(err);
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({
                posted: data
            }));
        });
    });

    SERVER.get('/api/v1/:api', (req, res)=> {
        return PROXY.web(req, res, {target: (req.secure ? 'https://' : 'http://') + process.env.DJANGO_HOST + ':' + process.env.DJANGO_PORT});
    });

    SERVER.post('/api/v1/:api', (req, res)=> {
        return PROXY.web(req, res, {target: (req.secure ? 'https://' : 'http://') + process.env.DJANGO_HOST + ':' + process.env.DJANGO_PORT});
    });

    SERVER.get('/admin/:model/:list/:id/:action', (req, res)=> {
        return PROXY.web(req, res, {target: (req.secure ? 'https://' : 'http://') + process.env.DJANGO_HOST + ':' + process.env.DJANGO_PORT});
    });

    SERVER.get('/admin/:model/:list/:id', (req, res)=> {
        return PROXY.web(req, res, {target: (req.secure ? 'https://' : 'http://') + process.env.DJANGO_HOST + ':' + process.env.DJANGO_PORT});
    });

    SERVER.get('/admin/:model/:list', (req, res)=> {
        return PROXY.web(req, res, {target: (req.secure ? 'https://' : 'http://') + process.env.DJANGO_HOST + ':' + process.env.DJANGO_PORT});
    });

    SERVER.get('/admin/:model', (req, res)=> {
        return PROXY.web(req, res, {target: (req.secure ? 'https://' : 'http://') + process.env.DJANGO_HOST + ':' + process.env.DJANGO_PORT});
    });

    SERVER.get('/admin', (req, res)=> {
        return PROXY.web(req, res, {target: (req.secure ? 'https://' : 'http://') + process.env.DJANGO_HOST + ':' + process.env.DJANGO_PORT});
    });

    SERVER.get('/gallery', (req, res)=> {
        return handle(req, res);
    });

    SERVER.get('*', (req, res) => {
        return handle(req, res);
    });

    SERVER.listen(process.env.PORT);
    console.log(`Node listening at port ${process.env.NODE_ENV}.`);
});