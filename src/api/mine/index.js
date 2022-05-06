import request from "@/api/request"

//获取收藏列表
function listAction(data) {
  return request({
    method: 'get',
    url: '/collect/listAction',
    params: data
  })
}
//意见反馈
function submitAction(data) {
  return request({
    method: 'post',
    url: 'feedback/submitAction',
    data
  })
}
export {
  listAction,
  submitAction
}