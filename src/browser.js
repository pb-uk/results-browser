// src/browser.js

import { ref } from 'vue';

export const getCurrentFolderUrl = () => {
  const path = window.location.href.replace(location.hash, '');
  // const path = 'https://portal.minimayc.co.uk/files/results/browse.html';
  return path.substring(0, path.lastIndexOf('/') + 1);
};

export const state = ref({
  tree: {
    url: null,
    entries: [],
    isLoaded: false,
    updated: null,
  },
});

export const getPage = async (url) => {
  const res = await fetch(url);
  return res;
};
