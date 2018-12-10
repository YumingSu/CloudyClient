<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <imitation-form :imitation="imitation" imitationBtnTitle="Make imitation"
                         @imitation-is-created-updated="submitImitation"></imitation-form>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import ImitationService from '@/services/ImitationService'
import imitationForm from '@/components/ImitationForm'

export default {
  data () {
    return {
      imitation: {brand: 'Gucci', price: 0.0, type: 'shoes', message: ''},
      messagetitle: ' Report Imitation '
    }
  },
  components: {
    'imitation-form': imitationForm
  },
  methods: {
    submitImitation: function (imitation) {
      ImitationService.postImitation(imitation)
        .then(response => {
          console.log(response)
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
