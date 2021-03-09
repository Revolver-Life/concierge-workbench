import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Profile from '../views/Profile.vue'
import Messages from '../views/Messages.vue'
import Catalogue from '../views/Catalogue.vue'
import Assets from '../views/Assets.vue'
import Feedback from '../views/Feedback.vue'
import Configuration from '../views/Configuration.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages
  },
  {
    path: '/catalogue',
    name: 'Catalogue',
    component: Catalogue
  },
  {
    path: '/assets',
    name: 'Assets',
    component: Assets
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback
  },
  {
    path: '/configuration',
    name: 'Configuration',
    component: Configuration
  }
]

const router = new VueRouter({
  routes
})

export default router
