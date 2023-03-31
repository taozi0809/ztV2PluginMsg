import Vue from 'vue'
import App from './App.vue'
import ztVue2MsgDemo from './plugins/ztV2PluginMsg/index'

Vue.config.productionTip = false

Vue.use(ztVue2MsgDemo)

new Vue({
    render: h => h(App),
}).$mount('#app')
