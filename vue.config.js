module.exports = {
    lintOnSave: false,
    devServer: {
        port:9100,
        proxy: {
            '/api': {
                target: 'http://localhost:8080', // 对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': '',
                },
            },
        },
    },
    publicPath: './',
}