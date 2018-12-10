import Print from './print.js'

if (module.hot) {
  module.hot.accept('./print.js', () => {
    console.log('change.......')
  })
}
