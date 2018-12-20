<template>
  <div id="app">
    <b-navbar toggleable="md" variant="clear" type="clear">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <img src="./assets/1.png" height="50" width="47" class="img-circle" style="padding: 5px">
      <b-navbar-brand to="/">Imitations Web App</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/#"><i class="fa fa-home" style="padding: 5px"> Home</i></b-nav-item>
          <b-nav-item to="/imitations"><i class="fa fa-list" style="padding: 5px"> Manage imitations</i></b-nav-item>
          <b-nav-item to="/factories"><i class="fa fa-list" style="padding: 5px"> Manage Factories</i></b-nav-item>
          <b-nav-item data-test="reportbtn" to="/report" ><i class="fa fa-money" style="padding: 5px"> Report</i></b-nav-item>
          <b-nav-item to="/map"><i class="fa fa-globe" style="padding: 5px"> Map</i></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/login"><i class="fa fa-sign-in" style="padding: 5px"> Login </i></b-nav-item>
          <i class="fa fa-pied-piper-alt fa-1x" style="padding: 5px; color: white;"></i>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #161616;
    padding-top: 20px;
    background: url("./assets/3.png") repeat center top;
  }
  .VueTables__sortable {
    cursor: pointer;
  }
</style>
