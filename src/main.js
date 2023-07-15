import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'


import '@fortawesome/fontawesome-free/css/all.css'
import { aliases, fa } from 'vuetify/iconsets/fa'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { VDataTable } from 'vuetify/labs/VDataTable'

import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
// import { createVuetify } from 'vuetify'


const vuetify = createVuetify({
  // icons: {
  //   defaultSet: 'fa',
  //   aliases,
  //   sets: {
  //     fa,
  //   },
  // },
  icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  },
  components: {
    ...components,
    VDataTable
  },
  directives,
})

createApp(App).use(vuetify).mount('#app')
