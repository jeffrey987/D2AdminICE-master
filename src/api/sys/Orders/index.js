import request from '@/plugin/axios'

var OrdersGetAll = function(data) {
    return request({
      url: '/swagger/api/Orders/GetListsAsync',
      method: 'get',
      params: data
    })
  }

  var OrdersGet = function(data) {
    return request({
      url: '/swagger/api/orders/Get',
      method: 'get',
      params: data
    })
  }

  var OrdersDel = function(data) {
    return request({
      url: '/swagger/api/Article/Delete',
      method: 'delete',
      params: data
    })
  }

  var OrdersCreateOrUpdate = function(data) {
    return request({
      url: '/swagger/api/Article/CreateOrUpdateAsync',
      method: 'post',
      data
    })
  }

  export{OrdersGetAll,OrdersGet,OrdersDel,OrdersCreateOrUpdate}
