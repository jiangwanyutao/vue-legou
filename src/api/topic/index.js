import request from "@/api/request"


// 专题接口列表
function listaction(data) {
  return request({
    method: 'get',
    url: '/topic/listaction',
    params: data
  })
}
//专题详情接口
function detailaction(data) {
  return request({
    method: 'get',
    url: '/topic/detailaction',
    params: data
  })
}
//首页品牌制造商直供的详情内的列表数据
function listactions(data) {
  return request({
    method: 'get',
    url: '/brand/listaction',
    params: data
  })
}
export {
  listaction,
  detailaction,
  listactions
}
