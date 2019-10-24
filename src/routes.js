import Login from "./components/Login/Login.vue";
import SignUp from "./components/Signup/SignUp.vue";
import Home from './components/Home';
import Posts from './components/Home/Posts.vue';
import Profile from './components/Home/Profile.vue';
import NewsFeed from './components/Home/NewsFeed.vue'

const routes = [{
        path: '/',
        component: Login
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/sign-up',
        component: SignUp
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '',
                component: NewsFeed
            },
            {
                path: 'posts',
                component: Posts
            },
            {
                path: 'profile',
                component: Profile
            }
        ]
    }
]

export default routes;