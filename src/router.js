import Vue from 'vue'
import VueRouter from 'vue-router'

import WelcomePage from './components/welcome/welcome.vue'
import StaffLoginPage from './components/auth/staff-login.vue'
import PatientLoginPage from './components/auth/patient-login.vue'
import StaffWelcomePage from './components/welcome/staff-home.vue'
import PatientWelcomePage from './components/welcome/patient-home.vue'
import PatientRegistration from './components/core/patient-registration.vue'
import PatientSearch from './components/core/patient-search.vue'
import PatientRecords from './components/core/patient-records.vue'
import Appointments from './components/core/appointments.vue'

Vue.use(VueRouter)

const routes = [
   { 
    path: '/', 
    component: WelcomePage
   },
   { 
    path: '/patient-login', 
    component: PatientLoginPage,
   },
   { 
    path: '/staff-login', 
    component: StaffLoginPage,
   },    
   {
    path: '/staff-home',
    component: StaffWelcomePage,
   },
   {
    path: '/patient-home',
    component: PatientWelcomePage
   },
   {
    path: '/logout',
    redirect: to => { return '/'}
   },
   {
    path: '/patient-registration',
    component: PatientRegistration
   },
   {
    path: '/patient-search',
    component: PatientSearch
   },
   {
    path: '/patient-records',
    component: PatientRecords
   },
   {
    path: '/appointments',
    component: Appointments
   }
]

export default new VueRouter({mode: 'history', routes})
