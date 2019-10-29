import Vue from 'vue'
import App from './App'
import "./src/css/reset.css"
import "./src/css/main.css"
import "./src/css/icon.css"
import "./src/css/base.css"

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
