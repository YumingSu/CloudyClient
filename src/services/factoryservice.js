import Api from '@/services/api'

export default {
  fetchFactories () {
    return Api().get('/factories')
  },
  postFactory (factory) {
    return Api().post('/factories', factory,
      { headers: {'Content-type': 'application/json'} })
  },
  reportFactory (id) {
    return Api().put(`/factories/${id}/report`)
  },
  deleteFactory (id) {
    return Api().delete(`/factories/${id}`)
  },
  fetchFactory (id) {
    return Api().get(`/factories/${id}`)
  },
  putFactory (id, factory) {
    console.log('REQUESTING ' + factory._id + ' ' +
      JSON.stringify(factory, null, 5))
    return Api().put(`/factories/${id}`, factory,
      { headers: {'Content-type': 'application/json'} })
  }
}
