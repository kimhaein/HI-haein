// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
// import { firestorePlugin } from 'vuefire';
// import VueBlu from 'vue-blu';
import "./utill/firebase";
import App from "./App";
import router from "./router";
// import Header from './components/common/Header';
// : if request.auth!=null;
// 컴포넌트 전역등록
// Vue.component(Header.name, Header);

// firebase.initializeApp(config);
// Vue.use(firestorePlugin);
// Vue.use(VueBlu);

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
