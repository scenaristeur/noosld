const publicPath = process.env.NODE_ENV === 'production' ? '/noosld/' : '/'

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: publicPath,
  pwa: {
    name: 'NoosLd',
     // themeColor: '#4dbab5',
     // msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      share_target: {
        action: publicPath+'share',
        method: "GET",
        enctype: "application/x-www-form-urlencoded",
        params: {
          title: "title",
          text: "text",
          url: "url"
        }
      },
    },


    // configure the workbox plugin
    /*  workboxPluginMode: 'InjectManifest',
    workboxOptions: {
    // swSrc is required in InjectManifest mode.
    swSrc: 'src/registerServiceWorker.js',
    // ...other Workbox options...
  }*/
},
  transpileDependencies: true
})
