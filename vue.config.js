module.exports = {
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: "src/firebase-messaging-sw.js"
    }
  },
  chainWebpack: config => {
    config.plugins.delete('prefetch')
  },
  // chainWebpack: config => {
  //   config.module
  //     .rule('raw')
  //     .test(/\.txt$/)
  //     .use('raw-loader')
  //     .loader('raw-loader')
  //     .end(),
  // },
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
  },
}