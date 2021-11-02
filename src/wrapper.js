// import Vue from 'vue/dist/vue.runtime.browser.prod';
// import { createApp } from 'vue/dist/vue.runtime.esm-bundler.js';
import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import app from './app.vue';

createApp(app)
  .use(
    createRouter({
      history: createWebHashHistory(),
      routes: [],
    })
  )
  .mount('#app');
