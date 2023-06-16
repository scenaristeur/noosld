import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import y_store from './y_store'
import BootstrapVue3 from "bootstrap-vue-3";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

createApp(App)
.use(y_store)
.use(router)
.use(BootstrapVue3)
.mount('#app')
