import Vue from 'vue'
import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'
import router from "./router/";
import '@vuikit/theme'

import App from "./App.vue";
import navigation from './navigation.json'
import '@/style/index.less'

Vue.use(Vuikit)
Vue.use(VuikitIcons)

new Vue({
	router,
	render: h => h(App),
	provide: { navigation }
}).$mount("#app");