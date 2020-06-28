import Vue from "vue";
import App from "./App.vue";
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/index.scss'

Vue.use(ElementUI);
//标题
router.beforeEach((to, from, next) => {
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()
})


Vue.config.productionTip = false;

new Vue({
  render: function(h) {
    return h(App);
  },
  router
}).$mount("#app");
