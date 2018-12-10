<template>
  <div class="hero">
    <h1 class="vue-title" style="color: #4435f0" >Face a trouble with Fakes ??</h1>
    <table align="center">
      <tr>
        <td>
          <p class="lead" style="color: #4435f0"><b><i>Time to report !!</i></b>
          <p style="color: #4435f0"></p>
          <p style="color: #4435f0">Just click <a href ="#/report">here</a> to go to</p>
          <p style="color: #4435f0">the Imitation page and report the BAD MANUFACTORS!!!</p>
          <p style="color: #4435f0">And click<a href = '#/map'>here</a>to go to the map!</p>
        </td>
        <td>
          <img src="../assets/2.gif" height="375" width="300" alt="description here" />
        </td>
      </tr>
    </table>

    <p></p>
    <p class="lead" style="color: #4435f0">This is the homepage of your <b>MEVN</b> Web app</p>
  </div>
</template>

<script>
import { getCookie, delCookie } from '@/assets/js/cookie.js'
export default{
  data () {
    return {
      name: ''
    }
  },
  mounted () {
    let uname = getCookie('username')
    this.name = uname
    if (uname === '') {
      this.$router.push('/')
    }
  },
  methods: {
    quit () {
      delCookie('username')
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
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    font-size: 70pt;
    margin-bottom: 10px;
  }
</style>
