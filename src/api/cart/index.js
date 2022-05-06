import request from "@/api/request"


// 购物车列表
function cartList(data) {
  return request({
    method: 'get',
    url: '/cart/cartList',
    params: data
  })
}
//删除商品
function deleteAction(data) {
  return request({
    method: 'get',
    url: '/cart/deleteAction',
    params: data
  })
}
// 提交订单
function submitAction(data) {
  return request({
    method: 'POST',
    url: 'order/submitAction',
    data
  })
}
export {
  cartList,
  deleteAction,
  submitAction
}
