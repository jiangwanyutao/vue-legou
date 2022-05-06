import request from "@/api/request"

//提交页面数据
function detailAction(data) {
  return request({
    method: 'get',
    url: '/order/detailAction',
    params: data
  })
}

export {
  detailAction
}