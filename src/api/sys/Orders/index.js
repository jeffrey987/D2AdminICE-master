import request from '@/plugin/axios'

var GetPaged = function(data) {
    return request({
      url: '/services/app/Order/GetPaged',
      method: 'get',
      params: data
    })
  }

  var GetById = function(data) {
    return request({
      url: '/services/app/Order/GetById',
      method: 'get',
      params: data
    })
  }
  var GetForEdit=function(data){
    return request({
      url:'/services/app/Order/GetForEdit',
      method:'get',
      params:data
    })
  }

  var Deleted = function(data) {
    return request({
      url: '/services/app/Order/Delete',
      method: 'delete',
      params: data
    })
  }
  var BatchDelete = function(data) {
    return request({
      url: '/services/app/Order/BatchDelete',
      method: 'post',
      params: data
    })
  }
  var CreateOrUpdate = function(data) {
    return request({
      url: '/services/app/Order/CreateOrUpdate',
      method: 'post',
      data
    })
  }

  export{GetPaged,GetById,GetForEdit,Deleted,BatchDelete,CreateOrUpdate}
