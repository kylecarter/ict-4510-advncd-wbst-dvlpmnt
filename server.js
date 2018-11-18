const express = require('express');
const next = require('next');
const httpProxy = require('http-proxy');
const cookieParser = require('cookie-parser');
const Twit = require('Twitter');

const DEV = process.env.NODE_ENV !== 'production';
const TWIT = new Twit({
    consumer_key: process.env.TWITTER_API_KEY,
    consumer_secret: process.env.TWITTER_API_KEY_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    timeout_ms: 60*1000,
    strictSSL: true,
    app_only_auth: true
});  

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

    SERVER.get('/api/v1/twitter', (req, res)=> {
        TWIT.get('search/tweets', { q: req.query.q, count: 25 }, function(err, data, response) {
            if (err) console.error(`Error: ${JSON.stringify(err)}`);
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({
                tweets: data,
                response: response
            }));
          });
    });

    SERVER.get('/api/v1/:api', (req, res)=> {
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