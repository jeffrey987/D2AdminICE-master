import request from '@/plugin/axios'

var GetPaged = function(data) {
    return request({
      url: '/services/app/Customer/GetPaged',
      method: 'get',
      params: data
    })
  }

  var GetById = function(data) {
    return request({
      url: '/services/app/Customer/GetById',
      method: 'get',
      params: data
    })
  }
  var GetForEdit=function(data){
    return request({
      url:'/services/app/Customer/GetForEdit',
      method:'get',
      params:data
    })
  }

  var Deleted = function(data) {
    return request({
      url: '/services/app/Customer/Delete',
      method: 'delete',
      params: data
    })
  }
  var BatchDelete = function(data) {
    return request({
      url: '/services/app/Customer/BatchDelete',
      method: 'post',
      params: data
    })
  }
  var CreateOrUpdate = function(data) {
    return request({
      url: '/services/app/Customer/CreateOrUpdate',
      method: 'post',
      data
    })
  }

  export{GetPaged,GetById,GetForEdit,Deleted,BatchDelete,CreateOrUpdate}
