<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <template v-if="childDataLoaded">
            <imitation-form :imitation="imitation" imitationBtnTitle="Update Imitation"
                           @imitation-is-created-updated="updateImitation"></imitation-form>
          </template>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import ImitationService from '@/services/ImitationService'
import ImitationForm from '@/components/ImitationForm'

export default {
  data () {
    return {
      imitation: {},
      childDataLoaded: false,
      temp: {},
      messagetitle: ' Update Imitation '
    }
  },
  components: {
    'imitation-form': ImitationForm
  },
  created () {
    this.getImitation()
  },
  methods: {
    getImitation: function () {
      ImitationService.fetchImitation(this.$router.params)
        .then(response => {
          this.temp = response.data
          this.imitation = this.temp[0]
          this.childDataLoaded = true
          console.log('Getting imitation in Edit: ' + JSON.stringify(this.imitation, null, 5))
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    updateImitation: function (imitation) {
      console.log('Before PUT ' + JSON.stringify(imitation, null, 5))
      ImitationService.putImitation(this.$router.params, imitation)
        .then(response => {
          console.log(response)
          console.log('AFTER PUT ' + JSON.stringify(imitation, null, 5))
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
