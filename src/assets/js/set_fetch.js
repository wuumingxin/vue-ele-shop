// import axios from 'axios'
import Qs from 'qs'

/**
 * 封装get方法
 * @param url
 * @param data
 * @return {Promise}
 */
// const configUrl = 'https://elm.cangdu.org'
const configUrl = ''

export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    url = configUrl + url
    // console.log('------' + url + '-------')
    let userData = localStorage.getItem('userData')
    userData = JSON.parse(userData)
    let key = ''; let uid = ''; let lat = '29.600309'; let lng = '106.526318'
    key = ''; uid = ''
    // lat='123';lng='123'
    if (userData) {
      key = userData.data.token
      uid = userData.data.user_id
      lat = userData.data.lat ? userData.data.lat : lat
      lng = userData.data.lng ? userData.data.lng : lng
    }
    // lat='29.54954';lng='106.57952';uid='492';key='d23d5d85-fd13-420c-9598-b91cdf01be5c'
    // lat='29.563715';lng='106.537042';uid='3106';key='4ef98127-d6e1-4be9-84ef-291e593a5a40'

    // const str = {
    //   key: key,
    //   user_id: uid,
    //   latitude: lat,
    //   longitude: lng
    // }

    const str = {
      key: key,
      user_id: uid,
      lat: lat,
      lng: lng
    }
    params = Object.assign(params, str)
    console.log('传的参数22', params)
    // axios.get(url, {
    //   params: params,
    //   headers: { Accept: 'application/vnd.car2.v1+json', DEVICE: 'wap', Authorization: key, USERID: uid }
    // })
    //   .then(response => {
    //     resolve(response.data)
    //   })
    //   .catch(err => {
    //     reject(err)
    //   })
    fetch(url + '?' + Qs.stringify(params), {
      method: 'GET',
      // headers: { Accept: 'application/vnd.car2.v1+json', DEVICE: 'wap', Authorization: key, USERID: uid }
      headers: { Accept: 'application/json' }
    }).then(response => {
      resolve(response.json())
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @return {Promise}
 */

export function post (url, params = {}) {
  return new Promise((resolve, reject) => {
    url = configUrl + url
    // console.log('------' + url + '-------')
    let userData = localStorage.getItem('userData')
    userData = JSON.parse(userData)
    let key = ''; let uid = ''; let lat = '29.600309'; let lng = '106.526318'
    // key='04f5085b-36f4-4be6-b36c-b2fd9b046cef';uid='1'
    // lat='123';lng='123'
    if (userData) {
      key = userData.data.token
      uid = userData.data.user_id
      lat = userData.data.lat ? userData.data.lat : lat
      lng = userData.data.lng ? userData.data.lng : lng
    }
    // lat='29.54954';lng='106.57952';uid='492';key='d23d5d85-fd13-420c-9598-b91cdf01be5c'
    // lat='29.563715';lng='106.537042';uid='3106';key='4ef98127-d6e1-4be9-84ef-291e593a5a40'
    const str = {
      key: key,
      user_id: uid,
      latitude: lat,
      longitude: lng
    }
    params = Object.assign(params, str)
    // console.log('传的参数', params)
    // 格式化未"name=tom&age=12"这种格式，且Content-Type必须匹配
    fetch(url, Qs.stringify(params), {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', Accept: 'application/vnd.car2.v1+json', DEVICE: 'wap', Authorization: key, USERID: uid },
      body: Qs.stringify(params)
    }).then(response => {
      response.json()
    }).then(json => {
      resolve(json)
    }).catch(err => {
      reject(err)
    })
  })
}

// WEBPACK FOOTER //
// ./src/assets/js/set_axios.js
