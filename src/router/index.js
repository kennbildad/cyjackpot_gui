import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from '@/views/AboutView.vue'
import PlayView from '@/views/PlayView.vue'
import ContactView from '@/views/ContactView.vue'
import LogIn from '@/views/LogIn.vue'
import SignUp from '@/views/SignUp.vue'
import PasswordReset from '@/views/PasswordReset.vue'
import NewPassword from '@/views/NewPassword.vue'
import DashBoard from '@/views/user/DashBoard.vue'
import UserProfile from '@/views/user/UserProfile.vue'
import EmailActivation from '@/views/EmailActivation.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/play', name: 'play', component: PlayView },
    { path: '/contact', name: 'contact', component: ContactView },
    { path: '/login', name: 'login', component: LogIn },
    { path: '/sign-up', name: 'sign-up', component: SignUp },
    { path: '/password-reset', name: 'password-reset', component: PasswordReset },
    { path: '/new-password', name: 'new-password', component: NewPassword },
    { path: '/dashboard', name: 'dashboard', component: DashBoard },
    { path: '/user-profile', name: 'user-profile', component: UserProfile },
    { path: '/email-activation', name: 'email-activation', component: EmailActivation }
  ],
});

export default router;
