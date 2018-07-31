import Vue from 'vue'
import Element from 'element-ui';
import ElementUI from 'element-ui';
import '../theme/index.css'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(Element, { size: 'small', zIndex: 3000 });

new Vue({
  render: h => h(App)
}).$mount('#app')
