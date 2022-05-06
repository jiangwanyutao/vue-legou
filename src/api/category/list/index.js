import request from "@/api/request"


// 获取导航数据
function categoryNav(data) {
  return request({
    method: 'get',
    url: '/category/categoryNav',
    params: data
  })
}
// 获取分类商品列表
function goodsList(data) {
  return request({
    method: 'get',
    url: '/goods/goodsList',
    params: data
  })
}

export {
  categoryNav,
  goodsList
}