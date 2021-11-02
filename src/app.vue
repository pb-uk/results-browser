<template>
  <div>This is a compiled template. {{ state }} {{ $route }}</div>
</template>

<script>
// import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    return {
      state: 'Loaded',
    };
  },
};
</script>
