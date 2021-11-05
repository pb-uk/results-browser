<template>
  <div>Route {{ $route }}</div>
  <div>State {{ state }}</div>
  <pre>{{ file }}</pre>
</template>

<script lang="ts">
// import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue';

import { getIndexUrl, fetchResource } from './resource/index';

export default {
  setup() {
    const state = ref({});

    const currentIndexUrl = getIndexUrl(window.location.href);

    const file = ref('');

    fetchResource(window.location.href).then((resource) => {
      console.log('Loaded resource', resource);
      // file.value = body;
    });

    fetchResource(currentIndexUrl + 'local.html').then((resource) => {
      console.log('Loaded html', resource);
      // file.value = body;
    });

    fetchResource(currentIndexUrl + 'locals.html').then((resource) => {
      console.log('Loaded error', resource);
      // file.value = body;
    });

    return {
      state,
      file,
      currentIndexUrl,
    };
  },
};
</script>

<style></style>
