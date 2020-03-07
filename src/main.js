// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import router from './router'
import Vue from "vue";
// import mint from "mint-ui";
// Vue.use(mint)
import { Header} from 'mint-ui';
// import { Button } from 'mint-ui';
Vue.component(Header.name, Header);
// Vue.component(Button.name, Button);
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import "./css/myapp.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "mui-master/dist/css/mui.min.css"
import "mui-master/dist/js/mui.min.js"
import "mui-master/dist/css/icons-extra.css"
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
