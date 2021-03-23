module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/kaso-agri/'
        : '/',
    assetsDir: 'assets',
    filenameHashing: false,
    lintOnSave: true,
    runtimeCompiler: true,
    devServer: {
        port: 7542 
    },
}
