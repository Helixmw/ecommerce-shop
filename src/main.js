import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
library.add(faStar);



createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
