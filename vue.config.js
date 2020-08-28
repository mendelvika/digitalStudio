module.exports = {
    lintOnSave: false,
    devServer: {
        proxy: 'http://test.sharksteam.com.ua/test.php',
        publicPath: process.env.NODE_ENV === 'production' ?
            '/digitalStudio.github.io/' : '/'
    }
}