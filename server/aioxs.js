import Axios from 'axios'
import qs from 'qs'

export function axios(url, data) {
  data = qs.stringify(data);

  return Axios({
    methods: '',
    url: url,
    params: data
  }).then(res => {
    return Promise.resolve(res)
  }).catch(err => {
    return Promise.reject(err)
  })
}