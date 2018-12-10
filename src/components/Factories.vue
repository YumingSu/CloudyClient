<!--<template>-->
  <!--<div class="hero">-->
    <!--<h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>-->
    <!--<div id="app1">-->
      <!--<v-client-table :columns="columns" :data="imitations" :options="options">-->
        <!--<a slot="report" slot-scope="props" class="fa fa-warning fa-2x" @click="report(props.row._id)"></a>-->
        <!--<a slot="edit" slot-scope="props" class="fa fa-edit fa-2x" @click="editImitation(props.row._id)"></a>-->
        <!--<a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteImitation(props.row._id)"></a>-->
      <!--</v-client-table>-->
    <!--</div>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--import ImitationService from '@/services/ImitationService'-->
  <!--import Vue from 'vue'-->
  <!--import VueTables from 'vue-tables-2'-->

  <!--Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})-->

  <!--export default {-->
    <!--name: 'Imitations',-->
    <!--data () {-->
      <!--return {-->
        <!--messagetitle: ' Imitations List ',-->
        <!--imitations: [],-->
        <!--props: ['_id'],-->
        <!--errors: [],-->
        <!--columns: ['_id', 'brand', 'type', 'price', 'reports', 'report', 'edit', 'remove'],-->
        <!--options: {-->
          <!--perPage: 10,-->
          <!--filterable: ['brand', 'type', 'price', 'reports'],-->
          <!--sortable: ['reports'],-->
          <!--headings: {-->
            <!--_id: 'ID',-->
            <!--brand: 'Brand Type',-->
            <!--price: 'Price',-->
            <!--type: 'Type',-->
            <!--reports: 'Reports'-->
          <!--}-->
        <!--}-->
      <!--}-->
    <!--},-->
    <!--// Fetches imitations when the component is created.-->
    <!--created () {-->
      <!--this.loadImitations()-->
    <!--},-->
    <!--methods: {-->
      <!--loadImitations: function () {-->
        <!--ImitationService.fetchImitations()-->
          <!--.then(response => {-->
            <!--// JSON responses are automatically parsed.-->
            <!--this.imitations = response.data-->
            <!--console.log(this.imitations)-->
          <!--})-->
          <!--.catch(error => {-->
            <!--this.errors.push(error)-->
            <!--console.log(error)-->
          <!--})-->
      <!--},-->
      <!--report: function (id) {-->
        <!--ImitationService.reportImitation(id)-->
          <!--.then(response => {-->
            <!--// JSON responses are automatically parsed.-->
            <!--this.loadImitations()-->
            <!--console.log(response)-->
          <!--})-->
          <!--.catch(error => {-->
            <!--this.errors.push(error)-->
            <!--console.log(error)-->
          <!--})-->
      <!--},-->
      <!--editImitation: function (id) {-->
        <!--this.$router.params = id-->
        <!--this.$router.push('edit')-->
      <!--},-->
      <!--deleteImitation: function (id) {-->
        <!--this.$swal({-->
          <!--title: 'Are you totaly sure?',-->
          <!--text: 'You can\'t Undo this action',-->
          <!--type: 'warning',-->
          <!--showCancelButton: true,-->
          <!--confirmButtonText: 'OK Delete it',-->
          <!--cancelButtonText: 'Cancel',-->
          <!--showCloseButton: true-->
          <!--// showLoaderOnConfirm: true-->
        <!--}).then((result) => {-->
          <!--console.log('SWAL Result : ' + result.value)-->
          <!--if (result.value === true) {-->
            <!--ImitationService.deleteImitation(id)-->
              <!--.then(response => {-->
                <!--// JSON responses are automatically parsed.-->
                <!--this.message = response.data-->
                <!--console.log(this.message)-->
                <!--this.loadImitations()-->
                <!--// Vue.nextTick(() => this.$refs.vuetable.refresh())-->
                <!--this.$swal('Deleted', 'You successfully deleted this imitation ' + JSON.stringify(response.data, null, 5), 'success')-->
              <!--})-->
              <!--.catch(error => {-->
                <!--this.$swal('ERROR', 'Something went wrong trying to Delete ' + error, 'error')-->
                <!--this.errors.push(error)-->
                <!--console.log(error)-->
              <!--})-->
          <!--} else {-->
            <!--console.log('SWAL Else Result : ' + result.value)-->
            <!--this.$swal('Cancelled', 'Your imitation still Counts!', 'info')-->
          <!--}-->
        <!--})-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</script>-->

<!--<style scoped>-->
  <!--#app1 {-->
    <!--width: 60%;-->
    <!--margin: 0 auto;-->
  <!--}-->
  <!--.vue-title {-->
    <!--margin-top: 30px;-->
    <!--text-align: center;-->
    <!--font-size: 45pt;-->
    <!--margin-bottom: 10px;-->
  <!--}-->
<!--</style>-->

