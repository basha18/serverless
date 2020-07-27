import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

import DefaultHeader from "./components/common/default-header.vue"
import PatientHeader from "./components/common/patient-header.vue"
import StaffHeader from "./components/common/staff-header.vue"
import PatientRegHeader from "./components/common/patient-registration-header.vue"
import AppointmentHeader from "./components/common/appointment-header.vue"
import PatientSearchHeader from "./components/common/patient-search-header.vue"

Vue.component('default-header',DefaultHeader);
Vue.component('patient-header',PatientHeader);
Vue.component('staff-header',StaffHeader);
Vue.component('patient-registration-header',PatientRegHeader);
Vue.component('appointment-header',AppointmentHeader);
Vue.component('patient-search-header',PatientSearchHeader);

axios.defaults.baseURL = 'https://vue-update.firebaseio.com'
// axios.defaults.headers.common['Authorization'] = 'fasfdsa'
axios.defaults.headers.get['Accepts'] = 'application/json'

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request Interceptor', config)
  return config
})
const resInterceptor = axios.interceptors.response.use(res => {
  console.log('Response Interceptor', res)
  return res
})

axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
