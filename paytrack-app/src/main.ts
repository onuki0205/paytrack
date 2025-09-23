import { createApp } from 'vue'
import App from './App.vue'

// Pinia
import { createPinia } from 'pinia'
// Vue Router
import router from './router'
// Styles
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import vuetify from 'vite-plugin-vuetify'


const app = createApp(App)
const pinia = createPinia()

app.use(vuetify)
app.use(pinia)
app.use(router)

app.mount('#app')
