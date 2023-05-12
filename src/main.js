import { createApp } from 'vue';
import App from './App.vue';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import "../node_modules/popper.js"
import "../node_modules/jquery/dist/jquery.slim"
import $bus from "./utils/Events"
import router from "./Routes"

const app = createApp(App)

// Routes:
app.use(router);

// Add event bus 
app.config.globalProperties.$bus = $bus;

// Mount our application
app.mount('#app');



// npm install bootstrap@4.0.0
// npm install bootstrap
// npm install jquery@3.2.1