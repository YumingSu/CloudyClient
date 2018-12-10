<template>
  <div class = "hero">
    <div class="login-wrap" v-show="showLogin">
      <h3>Log in</h3>
      <p v-show="showTishi">{{tishi}}</p>
      <input type="text" placeholder="User name" v-model="username">
      <input type="password" placeholder="Password" v-model="password">
      <button v-on:click="login">Log in</button>
      <span v-on:click="ToRegister">No account? Register now</span>
    </div>

    <div class="register-wrap" v-show="showRegister">
      <h3>Register</h3>
      <p v-show="showTishi">{{tishi}}</p>
      <input type="text" placeholder="User name" v-model="newUsername">
      <input type="password" placeholder="Password" v-model="newPassword">
      <button v-on:click="register">Register</button>
      <span v-on:click="ToLogin">Have account?Log in now</span>
    </div>
  </div>
</template>

<style>
  .login-wrap{text-align:center;}
  input{display:block; width:250px; height:40px; line-height:40px; margin:0 auto; margin-bottom: 10px; outline:none; border:1px solid #888; padding:10px; box-sizing:border-box;}
  p{color:red;}
  button{display:block; width:250px; height:40px; line-height: 40px; margin:0 auto; border:none; background-color: #4435f0; color:#fff; font-size:16px; margin-bottom:5px;}
  span{cursor:pointer;}
  span:hover{color: #4435f0;}
</style>

<script>
import {setCookie, getCookie} from '@/assets/js/cookie.js'

export default{
  data () {
    return {
      showLogin: true,
      showRegister: false,
      showTishi: false,
      tishi: '',
      username: '',
      password: '',
      newUsername: '',
      newPassword: ''
    }
  },
  mounted () {
    if (getCookie('username')) {
      this.$router.push('/home')
    }
  },
  methods: {
    login () {
      if (this.username === '' || this.password === '') {
        alert('Please enter user name or password')
      } else {
        let data = {'username:': this.username, 'password:': this.password}
        this.$http.post('http://localhost3000', data).then((res) => {
          console.log(res)
          if (res.data === -1) {
            this.tishi = 'User doesn\'t exsit'
            this.showTishi = true
          } else if (res.data === 0) {
            this.tishi = 'Wrong password!'
            this.showTishi = true
          } else if (res.data === 'admin') {
            this.$router.push('/Manage')
          } else {
            this.tishi = 'Log in successfully'
            this.showTishi = true
            setCookie('username', this.username, 1000 * 60)
            setTimeout(function () {
              this.$router.push('/#')
            }.bind(this), 1000)
          }
        })
      }
    },
    register () {
      if (this.newUsername === '' || this.newPassword === '') {
        alert('Please enter user name or password')
      } else {
        let data = {'username': this.newUsername, 'password': this.newPassword}
        this.$http.post('http://localhost/vueapi/index.php/Home/user/register', data).then((res) => {
          console.log(res)
          if (res.data === 'ok') {
            this.tishi = 'Regiser successfully!'
            this.showTishi = true
            this.username = ''
            this.password = ''
            setTimeout(function () {
              this.showRegister = false
              this.showLogin = true
              this.showTishi = false
            }.bind(this), 1000)
          }
        })
      }
    },
    ToRegister () {
      this.showRegister = true
      this.showLogin = false
    },
    ToLogin () {
      this.showRegister = false
      this.showLogin = true
    }
  }
}
</script>

<style>
  .hero {
    height: 100vh;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero .lead {
    font-weight: 200;
    font-size: 2.5rem;
  }
</style>
