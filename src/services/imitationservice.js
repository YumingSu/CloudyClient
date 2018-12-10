import Api from '@/services/api'

export default {
  fetchImitations () {
    return Api().get('/imitations')
  },
  postImitation (imitation) {
    return Api().post('/imitations', imitation,
      { headers: {'Content-type': 'application/json'} })
  },
  reportImitation (id) {
    return Api().put(`/imitations/${id}/report`)
  },
  deleteImitation (id) {
    return Api().delete(`/imitations/${id}`)
  },
  fetchImitation (id) {
    return Api().get(`/imitations/${id}`)
  },
  putImitation (id, imitation) {
    console.log('REQUESTING ' + imitation._id + ' ' +
      JSON.stringify(imitation, null, 5))
    return Api().put(`/imitations/${id}`, imitation,
      { headers: {'Content-type': 'application/json'} })
  }
}
