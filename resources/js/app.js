// import './bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue/dist/vue.esm-bundler';

import HomePage from './HomePage.vue'

const App = createApp({
   components: {
      HomePage
   }
}).mount("#app")