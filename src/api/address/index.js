import request from "@/api/request"


// 购物车列表
function getListAction(data) {
  return request({
    method: 'get',
    url: '/address/getListAction',
    params: data
  })
}
// 保存和跟添加收货地址
function saveAction(data) {
  return request({
    method: 'post',
    url: '/address/saveAction',
    data
  })
}
// 删除地址
function deleteAction(data) {
  return request({
    method: 'get',
    url: '/address/deleteAction',
    params:data
  })
}

export {
  getListAction,
  saveAction,
  deleteAction
}
