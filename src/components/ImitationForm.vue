<template>
  <form @submit.prevent="submit">
    <div class="form-group">
        <label class="form-label">Select Brand Type</label>
        <select id="brand" name="brand" class="form-control"
                type="text" v-model="brand">
          <option value="null" selected disabled hidden>Choose Brand Type</option>
          <option value="Gucci">Gucci</option>
          <option value="Chanel">Chanel</option>
          <option value="Dior">Dior</option>
          <option value="Prada">Prada</option>
          <option value="LouisVuitton">LouisVuitton</option>
          <option value="Others">Others</option>
        </select>
    </div>
    <div>
      <label class="form-label">Select Imitation Type</label>
      <select id="type" name="type" class="form-control"
              type="text" v-model="type">
        <option value="null" selected disabled hidden>Choose Imitation Type</option>
        <option value="shoes">shoes</option>
        <option value="bag">bag</option>
        <option value="coat">coat</option>
        <option value="wallet">wallet</option>
        <option value="other type">other type</option>
      </select>
    </div>
    <div class="form-group" :class="{ 'form-group--error': $v.price.$error }">
      <label class="form-control-label" name="price">Price (Enter a number between 1 and 10000)</label>
      <input data-test="price" class="form__input" type="decimal" v-model.trim="price"/>
    </div>
    <div class="error" v-if="!$v.price.between">Price must be between 1 and 10000</div>
    <div class="form-group" :class="{ 'form-group--error': $v.message.$error }">
      <label class="form__label">Personal Message</label>
      <input class="form__input" placeholder="enter some message here" v-model.trim="$v.message.$model"/>
    </div>
    <div class="error" v-if="!$v.message.required">Message is Required</div>
    <div class="error" v-if="!$v.message.minLength">Message must have at least {{$v.message.$params.minLength.min}} letters.</div>
    <p>
      <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">{{ imitationBtnTitle }}</button>
    </p>
    <p>
      <a href="#/imitations" class="btn btn-primary btn1" role="button">Manage imitations</a>
    </p>
    <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your Report!</p>
    <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
    <p class="typo__p" v-if="submitStatus === 'PENDING'">Reporting...</p>
  </form>
</template>

<script>
import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import { required, minLength, between } from 'vuelidate/lib/validators'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)

export default {
  name: 'FormData',
  props: ['imitationBtnTitle', 'imitation'],
  data () {
    return {
      messagetitle: ' Report ',
      message: this.imitation.message,
      brand: this.imitation.brand,
      type: this.imitation.type,
      price: this.imitation.price,
      reports: 0,
      submitStatus: null
    }
  },
  validations: {
    message: {
      required,
      minLength: minLength(5)
    },
    price: {
      required,
      between: between(1, 10000)
    }
  },
  methods: {
    submit () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          var imitation = {
            brand: this.brand,
            price: this.price,
            type: this.type,
            reports: this.reports,
            message: this.message
          }
          this.imitation = imitation
          console.log('Submitting in imitationForm : ' +
            JSON.stringify(this.imitation, null, 5))
          this.$emit('imitation-is-created-updated', this.imitation)
        }, 500)
      }
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
  .report-form .form-control-label.text-left{
    text-align: left;
  }
  label {
    display: inline-block;
    width: 540px;
    text-align: left;
    font-size: x-large;
  }
  .typo__p {
    width: 540px;
    font-size: x-large;
  }
  .btn1 {
    width: 300px;
    font-size: x-large;
  }
  p {
    margin-top: 20px;
  }

  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 540px;
  }

  .dirty {
    border-color: #5A5;
    background: #EFE;
  }

  .dirty:focus {
    outline-color: #8E8;
  }

  .error {
    border-color: red;
    background: #157ffb;
    color: whitesmoke;
  }

  .error:focus {
    outline-color: #ffa519;
  }
</style>
