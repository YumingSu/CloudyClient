<template>
  <a v-if="!signState" href="#" v-on:click="saveURL">登录</a>
</template>

<script>
export default {
  data () {
    return {
      client_id: 'your client ID',
      client_secret: 'your client secret',
      scope: 'read:user', // Grants access to read a user's profile data.
      state: 'your state',
      getCodeURL: 'https://github.com/login/oauth/authorize',
      getAccessTokenURL: '/github/login/oauth/access_token',
      getUserURl: 'https://api.github.com/user',
      redirectURL: null,
      code: null,
      accessToken: null,
      signState: false
    }
  },
  name: 'GithubAuth',
  saveURL: function () {
    if (Query.parse(location.search).state !== this.state) {
      this.$cookie.set('redirectURL', location.href, 1)
      location.href = this.getCodeURL
    }
  },
  computed: {
    formatCodeURL: function () {
      return this.getCodeURL + ('?' + Query.stringify({
        client_id: this.client_id,
        scope: this.scope,
        state: this.state
      }))
    }
  },
  getCode: function () {
    this.getCodeURL += ('?' + Query.stringify({
      client_id: this.client_id,
      scope: this.scope,
      state: this.state
    }))
    let parse = Query.parse(location.search)
    if (parse.state === this.state) {
      this.code = parse.code
    }
  },
  getAccessToken: function () {
    this.axios.post(this.getAccessTokenURL, {
      client_id: this.client_id,
      client_secret: this.client_secret,
      code: this.code,
      state: this.state
    }).then((response) => {
      this.accessToken = response.data.access_token
      if (this.accessToken) {
        // save to cookie 30 days
        this.$cookie.set('accessToken', this.accessToken, 30)
        this.redirectURL = this.$cookie.get('redirectURL')
        if (this.redirectURL) {
          location.href = this.redirectURL
        }
      }
    })
  }
}
</script>

<style scoped>

</style>
