import request from '@/plugin/axios'

var GetPaged = function(data) {
    return request({
      url: '/services/app/Activity/GetPaged',
      method: 'get',
      params: data
    })
  }

  var GetById = function(data) {
    return request({
      url: '/services/app/Activity/GetById',
      method: 'get',
      params: data
    })
  }
  var GetForEdit=function(data){
    return request({
      url:'/services/app/Activity/GetForEdit',
      method:'get',
      params:data
    })
  }

  var Deleted = function(data) {
    return request({
      url: '/services/app/Activity/Delete',
      method: 'delete',
      params: data
    })
  }
  var BatchDelete = function(data) {
    return request({
      url: '/services/app/Activity/BatchDelete',
      method: 'post',
      params: data
    })
  }
  var CreateOrUpdate = function(data) {
    return request({
      url: '/services/app/Activity/CreateOrUpdate',
      method: 'post',
      data
    })
  }

  export{GetPaged,GetById,GetForEdit,Deleted,BatchDelete,CreateOrUpdate}
