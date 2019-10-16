
import Login from "./components/Login/Login.vue";
import SignUp from "./components/Signup/SignUp.vue";
import Home from './components/Home';
import About from './components/About';

const routes = [
  { path: '/', component: Login },
  { path: '/login', component: Login },
  { path: '/sign-up', component: SignUp },
  { path: '/home', component: Home },
  { path: '/about', component: About },
]

export default routes;