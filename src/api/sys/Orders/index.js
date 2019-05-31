import request from '@/plugin/axios'

var GetAll = function(data) {
    return request({
      url: '/swagger/api/Orders/GetListsAsync',
      method: 'get',
      params: data
    })
  }

  var ContentGet = function(data) {
    return request({
      url: '/swagger/api/orders/Get',
      method: 'get',
      params: data
    })
  }

  var Deleted = function(data) {
    return request({
      url: '/swagger/api/Article/Delete',
      method: 'delete',
      params: data
    })
  }

  var CreateOrUpdate = function(data) {
    return request({
      url: '/swagger/api/Article/CreateOrUpdateAsync',
      method: 'post',
      data
    })
  }

  export{GetAll,ContentGet,Deleted,CreateOrUpdate}
