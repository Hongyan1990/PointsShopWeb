import createApp from './create-app.js'

export default context => {
  return new Promise((resolve, reject) => {
    const {app, router} = createApp()
    router.push(context.url)
    router.onReady(() => {
      // const matchedComponents = router.getMatchedComponents()
      // if (!matchedComponents.length) {
      //   return reject(new Error('no components matched'))
      // }
      context.meta = app.$meta()
      resolve(app)
    })
  })
}
