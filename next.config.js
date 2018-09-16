const withSass = require('@zeit/next-sass')
module.exports = withSass({
    cssModules: true,
    sassLoaderOptions: {
        includePaths: [
            'sass/components',
            'sass/stylesheet',
            'node_modules/',
        ]
    }
})