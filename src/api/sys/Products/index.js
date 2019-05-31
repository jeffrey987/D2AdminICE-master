import request from '@/plugin/axios'

var GetAll = function (data) {
  return request({
    url: '/swagger/api/Products/GetPaged',
    method: 'get',
    params: data
  })
}

var ContentGet = function (data) {
  return request({
    url: '/swagger/api/Products/GetById',
    method: 'get',
    params: data
  })
}

var Deleted = function (data) {
  return request({
    url: '/swagger/api/Products/Delete',
    method: 'delete',
    params: data
  })
}

var CreateOrUpdate = function (data) {
  return request({
    url: '/swagger/api/Products/CreateOrUpdate',
    method: 'post',
    params: data
  })
}

export {
  GetAll,
  ContentGet,
  Deleted,
  CreateOrUpdate
}