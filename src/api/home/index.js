import request from "@/api/request"
//首页轮播
  function index() {
    return request({
      url: '/index/index',
      method: 'get',
      // params: data
    })
}
// 首页品牌制造商直供的详情数据
  function detailaction(data) {
    return request({
      url: '/brand/detailaction',
      method: 'get',
      params: data
    })
}
  // 首页品牌制造商直供的详情内的列表数据
    function listaction(data) {
      return request({
        url: '/brand/listaction',
        method: 'get',
        params: data
      })
    }

export {
  index,
  detailaction,
  listaction
  }