
import Login from "./components/Login/Login.vue";
import SignUp from "./components/Signup/SignUp.vue";

const routes = [
  { path: '/', component: Login },
  { path: '/login', component: Login },
  { path: '/sign-up', component: SignUp }
]

export default routes;