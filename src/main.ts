import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
import { createPinia } from 'pinia'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const app = createApp(App)
const pinia = createPinia()
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles

app.use(pinia)
app.use(router)
app.mount('#app')

AOS.init()
