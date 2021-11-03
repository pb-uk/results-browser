<template>
  <div>Route {{ $route }}</div>
  <div>State {{ state }}</div>
  <pre>{{ file }}</pre>
</template>

<script>
// import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue';

import { getCurrentFolderUrl, fetchResource } from './resource/index';

export default {
  setup() {
    const state = ref({});

    const currentUrl = getCurrentFolderUrl();

    const file = ref('');

    fetchResource(currentUrl).then((resource) => {
      console.log('Loaded resource', resource);
      // file.value = body;
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
