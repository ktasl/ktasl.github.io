import './assets/css/menu.css'
import './assets/css/dropdown.css'
import './assets/css/button.css'
import './assets/css/popup.css'

import Vue from 'vue'
import Navbar from './Navbar.vue'
import MainContainer from './MainContainer.vue'
import Footer from './Footer.vue'

new Vue({
    el: '#navbar',
    render: h => h(Navbar)
})

new Vue({
    el: '#maincontainer',
    render: h => h(MainContainer)
})

new Vue({
    el: '#footer',
    render: h => h(Footer)
})