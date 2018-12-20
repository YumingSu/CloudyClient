import Api from '@/services/api'

export default {
  findUsername () {
    return Api().get('`/users')
  }
}
