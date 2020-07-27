<template>
  <div>
  <appointment-header/>
  <div id="appointment">
    <div class="signup-form">
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="patientId">Patient ID</label>
          <input
                  type="type"
                  id="patientId"
                  v-model="patientId">
        </div>
        <div class="input">
          <label for="date">Appointment Date</label>
          <input
                  type="date"
                  id="date"
                  v-model.number="date">
        </div>
        <div class="input">
          <label for="country">Country</label>
          <select id="country" v-model="country">
            <option value="india">India</option>
          </select>
        </div>
        <div class="input">
          <label for="city">City</label>
          <select id="city" v-model="city">
            <option value="bengaluru">Bengaluru</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="chennai">Chennai</option>
          </select>
        </div>
        <div class="input">
          <label for="department">Department</label>
          <select id="department" v-model="department">
            <option value="Neurology">Neurology</option>
            <option value="Cardiology">Cardiology</option>
            <option value="general">General Surgery</option>
            <option value="Nephrology">Nephrology</option>
          </select>
        </div>
        <div class="input">
          <label for="doctor">Doctor</label>
          <select id="doctor" v-model="doctor">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
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
        console.log(formData)
        axios.post('/signupNewUser?key=AIzaSyCXlVPPWknVGhfc60mt7Jkv0Xzrho7_mwc', {
          email: formData.email,
          password: formData.password,
          returnSecureToken: true
        })
          .then(res => console.log(res))
          .catch(error => console.log(error))
      }
    }
  }
</script>

<style scoped>
  .signup-form {
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

  .input.inline label {
    display: inline;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input.inline input {
    width: auto;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #521751;
    background-color: #eee;
  }

  .input select {
    border: 1px solid #ccc;
    font: inherit;
  }

  .hobbies button {
    border: 1px solid #521751;
    background: #521751;
    color: white;
    padding: 6px;
    font: inherit;
    cursor: pointer;
  }

  .hobbies button:hover,
  .hobbies button:active {
    background-color: #8d4288;
  }

  .hobbies input {
    width: 90%;
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
