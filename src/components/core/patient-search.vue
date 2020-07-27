<template>
  <div>
  <patient-search-header />
  <div class="signup-form">
      <form @submit.prevent="onSubmit">
         <label for="patientId">Patient ID</label>
	 <input type="text" placeholder="Enter Patient ID.." name="search">
         <button type="submit"><i class="fa fa-search"></i></button>
      </form>
    </div>
  </div>
  
</template>

<script>
  import axios from '../../axios-auth';

  export default {
    data () {
      return {
        email: '',
        age: null,
        password: '',
        confirmPassword: '',
        country: 'usa',
        hobbyInputs: [],
        terms: false
      }
    },
    methods: {
      onSubmit () {
        const formData = {
          email: this.email,
          age: this.age,
          password: this.password,
          confirmPassword: this.confirmPassword,
          country: this.country,
          hobbies: this.hobbyInputs.map(hobby => hobby.value),
          terms: this.terms
        }
        //console.log(formData)
        //axios.post('/signupNewUser?key=AIzaSyCXlVPPWknVGhfc60mt7Jkv0Xzrho7_mwc', {
        //  email: formData.email,
        //  password: formData.password,
        //  returnSecureToken: true
        // })
        //  .then(res => console.log(res))
        //  .catch(error => console.log(error))
      }
    }
  }
</script>

<style scoped>

.signup-form {
    width: 300px;
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
  
</style>
