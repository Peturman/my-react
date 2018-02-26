import Cookies from 'js-cookie'

export default {
  // apiService: __DEV__ ? 'http://127.0.0.1:443' : 'http://120.78.182.153:443',
  apiService: 'http://120.78.182.153:443',
  uploadHeaders: {
    userToken: Cookies.get('userToken')
  }
}
