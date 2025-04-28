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

app.mount('#app')
