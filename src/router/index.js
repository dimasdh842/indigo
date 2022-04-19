import LoginComponent from '@/views/LoginComponent'
import HomeComponent from '@/views/HomeComponent'
import RegisterComponent from '@/views/RegisterComponent'
import { createWebHistory,createRouter } from 'vue-router'
import store from '@/store';



const routes = [
  
    {
      path: '/',
      name: '/',
      component: HomeComponent,
      beforeEnter: (to,from,next) => {
        if (store.state.user.authenticated) {
          // next({name: "Home"})
        }
        // reject the navigation
        next({name: "Login"})
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginComponent,
      beforeEnter: (to,from,next) => {
        if (store.state.user.authenticated) {
          next({name:"Home"})
        }

        next()
    },
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeComponent,
      beforeEnter: (to,from,next) => {
        if (!store.state.user.authenticated) {
          next({name:"Login"})
        }
        
      next()        

    },
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterComponent,
      beforeEnter: (to, from, next) => {
        if (store.state.user.authenticated) {
          next({ name: "Home" })
        }

        next()
      },
    }
  ]
  

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router;