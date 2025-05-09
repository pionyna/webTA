import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // pastikan ini ada

const app = createApp(App)

app.use(router) // INI HARUS ADA!
app.mount('#app')
