import request from "@/api/request"


// 分类导航获取
function indexaction() {
  return request({
    method: 'get',
    url: '/category/indexaction'
  })
}
// 通过分类的id来查询分类列表数据
function currentaction(data) {
  return request({
    method: 'get',
    url: '/category/currentaction',
    params: data
  })
}

export {
  indexaction,
  currentaction
}