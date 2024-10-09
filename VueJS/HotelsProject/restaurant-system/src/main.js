import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
//import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(routers)

//app.mount('#app')



import routers from "./router/routers";

createApp(App)
    .use(routers)
    .mount("#app");
