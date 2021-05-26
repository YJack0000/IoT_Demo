import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import router from './router'

const app = createApp(App)

//Element
installElementPlus(app)
app.use(ElementPlus)

//router
app.use(router).mount('#app')