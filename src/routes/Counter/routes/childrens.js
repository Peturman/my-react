import injectComponent from '../modules/injectComponent'
import Test from '../views/test'

export default [
  {
    path: 'test',
    component: injectComponent(Test)
  }
]
