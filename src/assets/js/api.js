// import { fetch } from './set_axios'
import { get } from './set_fetch'

// oss数据
export const ossMsg = (data) => {
  return get('api/config/oss', data)
}

// 门店详情
export const serviceStoreInfo = (data, storeid) => {
  return get(`api/store/services/${storeid}`, data)
}

// 热门城市
export const hotcity = () => {
  return get('/api2/v1/cities', {
    type: 'hot'
  })
}

// 当前所在城市
export const nowcity = (data = { latitude: 29.572368, longitude: 106.568934 }) => {
  return get('/api1', data)
}

// 获取所有城市
export const groupcity = () => {
  return get('/api2/v1/cities', {
    type: 'group'
  })
}

// 查询地址
export const queryaddress = (data) => {
  return get('/api2/v1/pois', data)
}

// 获取食品分类列表

export const foodclass = (data) => {
  return get('/api2/v2/index_entry', data)
}

// 获取商家列表

export const shoppinglist = (data) => {
  return get('/api2/shopping/restaurants', data)
}

// 搜索餐馆

export const searchShopping = (data) => {
  return get('/api2/v4/restaurants', data)
}

// 获取所有商铺分类列表

export const shopclasslist = (data) => {
  return get('/api2/shopping/v2/restaurant/category', data)
}

// 获取配送方式

export const deliverymodes = (data) => {
  return get('/api2/shopping/v1/restaurants/delivery_modes', data)
}

// 获取商家属性活动列表

export const activityattributes = (data) => {
  return get('/api2/shopping/v1/restaurants/activity_attributes', data)
}

// 餐馆详情
export const restaurantInfo = (data, shopid) => {
  return get(`/api2/shopping/restaurant/${shopid}`, data)
}

// 获取食品列表

export const foodmenu = (data) => {
  return get('/api2/shopping/v2/menu', data)
}
