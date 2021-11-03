<template>
  <div>Route {{ $route }}</div>
  <div>State {{ state }}</div>
  <pre>{{ file }}</pre>
</template>

<script>
// import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue';

import { getCurrentFolderUrl, getPage, state as browserState } from './browser';

export default {
  setup() {
    const state = ref({
      browser: browserState,
    });

    const currentUrl = getCurrentFolderUrl();

    const file = ref('');

    getPage(currentUrl).then((body) => {
      console.log('Loaded body', body);
      file.value = body;
    });

    return {
      state,
      file,
      currentUrl,
    };
  },
};
</script>

<style></style>
