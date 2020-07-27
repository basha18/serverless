<template>
  <div>
  <default-header />
  <div id="staff-login">
      <div class="signin-form">
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="staffId">Staff ID</label>
          <input
                  type="text"
                  id="staffId"
                  v-model="staffId">
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input
                  type="password"
                  id="password"
                  v-model="password">
        </div>
        <div class="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
  </div>
</template>

<script>
  import axios from '../../axios-auth'

  export default {
    data () {
      return {
        staffId: '',
        password: ''
      }
    },
    methods: {
      onSubmit () {
        const formData = {
          staffId: this.staffId,
          password: this.password,
        }
        console.log(formData)
        //axios.post('/verifyPassword?key=AIzaSyCXlVPPWknVGhfc60mt7Jkv0Xzrho7_mwc', {
        //  staffId: formData.staffId,
        //  password: formData.password,
        //  returnSecureToken: true
        //})
        //  .then(res => console.log(res))
        //  .catch(error => console.log(error))
        this.$router.push('/staff-home') 
      }
    }
  }
</script>

<style scoped>
  .signin-form {
    width: 400px;
    margin: 30px auto;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
  }

  .input {
    margin: 10px auto;
  }

  .input label {
    display: block;
    color: #4e4e4e;
    margin-bottom: 6px;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #521751;
    background-color: #eee;
  }

  .submit button {
    border: 1px solid #521751;
    color: #521751;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
  }

  .submit button:hover,
  .submit button:active {
    background-color: #521751;
    color: white;
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
  }
</style>
