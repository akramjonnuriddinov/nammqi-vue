import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
import { createPinia } from 'pinia'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

const app = createApp(App)
const pinia = createPinia()
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
import '@fortawesome/fontawesome-free/css/all.min.css'

app.use(pinia)
app.use(router)
app.mount('#app')

AOS.init()
