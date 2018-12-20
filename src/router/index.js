import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Imitations from '@/components/Imitations'
import Factories from '@/components/Factories'
import Report from '@/components/Report'
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import Login from '@/components/Login'
import Map from '@/components/Map'
import Edit from '@/components/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/imitations',
      name: 'Imitations',
      component: Imitations
    },
    {
      path: '/factories',
      name: 'Factories',
      component: Factories
    },
    {
      path: '/report',
      name: 'Report',
      component: Report
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit,
      props: true
    },
    {
      path: '/about',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/contact',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Map',
      name: 'Map',
      component: Map
    }
  ]
})
