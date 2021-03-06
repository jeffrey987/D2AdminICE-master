import request from '@/plugin/axios'

var GetPaged = function(data) {
    return request({
      url: '/services/app/Product/GetPaged',
      method: 'get',
      params: data
    })
  }

  var GetById = function(data) {
    return request({
      url: '/services/app/Product/GetById',
      method: 'get',
      params: data
    })
  }
  var GetForEdit=function(data){
    return request({
      url:'/services/app/Product/GetForEdit',
      method:'get',
      params:data
    })
  }

  var Deleted = function(data) {
    return request({
      url: '/services/app/Product/Delete',
      method: 'delete',
      params: data
    })
  }
  var BatchDelete = function(data) {
    return request({
      url: '/services/app/Product/BatchDelete',
      method: 'post',
      params: data
    })
  }
  var CreateOrUpdate = function(data) {
    return request({
      url: '/services/app/Product/CreateOrUpdate',
      method: 'post',
      data
    })
  }

  export{GetPaged,GetById,GetForEdit,Deleted,BatchDelete,CreateOrUpdate}
