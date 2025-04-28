import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// PrimeVue imports
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Card from 'primevue/card'
import Carousel from 'primevue/carousel'
import Dialog from 'primevue/dialog'

// Font Awesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLeaf, faSeedling, faTree, faSun, faCloudSun, faDroplet, faCut, faSprayCanSparkles } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faFacebook, faInstagram, faYelp } from '@fortawesome/free-brands-svg-icons'

// Add icons to library
library.add(
  faLeaf, faSeedling, faTree, faSun, faCloudSun, faDroplet, faCut, faSprayCanSparkles,
  faEnvelope,
  faFacebook, faInstagram, faYelp
)

// PrimeVue styles
import 'primevue/resources/themes/lara-light-green/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App)

// Register PrimeVue and its components
app.use(PrimeVue, { ripple: true })
app.component('Button', Button)
app.component('InputText', InputText)
app.component('Card', Card)
app.component('Carousel', Carousel)
app.component('Dialog', Dialog)

// Register Font Awesome component
app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
