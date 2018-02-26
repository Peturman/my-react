import { injectReducer } from '../../store/reducers'
import injectComponent from './modules/injectComponent'

import IndexComponent from './views'
import chidrens from './routes/childrens'

export default (store) => ({
  path : 'counter',
  /*  Async getComponent is only invoked when route matches   */

  getIndexRoute (location, callback) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Counter = injectComponent(IndexComponent)
      const reducer = require('./modules/reducer').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'counter', reducer })

      /*  Return getComponent   */
      callback(null, { component: Counter })

      /* Webpack named bundle   */
    }, 'counter')
  },

  getChildRoutes (location, callback) {
    require.ensure([], function (require) {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const reducer = require('./modules/reducer').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'counter', reducer })

      /*  Return getComponent   */
      callback(null, chidrens)
    })
  }
})
