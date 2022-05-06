import request from "@/api/request"


// 搜索关键词和热搜
function indexaction(data) {
  return request({
    method: 'get',
    url: '/search/indexaction',
    params: data
  })
}
//搜索提示关键词
function helperaction(data) {
  return request({
    method: 'get',
    url: '/search/helperaction',
    params: data
  })
}
//搜索关键词添加到数据库
function addhistoryaction(data) {
  return request({
    method: 'post',
    url: '/search/addhistoryaction',
    data
  })
}
//清楚搜索记录
function clearhistoryAction(data) {
  return request({
    method: 'post',
    url: '/search/clearhistoryAction',
    data
  })
}
export {
  indexaction,
  helperaction,
  addhistoryaction,
  clearhistoryAction
}
