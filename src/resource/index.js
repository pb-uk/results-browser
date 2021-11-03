// src/resource/resource.js

import { IndexDocument } from './index-document';
import { ContentDocument } from './content-document';
import { ErrorResource } from './error-resource';
import { Resource } from './resource';

const getContentType = (response) => {
  const header = response.headers.get('Content-Type');
  const term = header.indexOf(';');
  return term < 0 ? header : header.substring(0, term);
};

// Export this for testing.
export const parseResponse = async (response) => {
  if (!response.ok) {
    // Handle an error response.
    return new ErrorResource(response);
  }
  const contentType = getContentType(response);
  if (contentType === 'text/html') {
    const body = await response.text();
    if (body.search(/<title>Index of .*<h1>Index of /)) {
      return new IndexDocument({ body });
    }
    return new ContentDocument({ body });
  }
  return new Resource(response);
};

export const getCurrentFolderUrl = () => {
  const path = window.location.href.replace(location.hash, '');
  return path.substring(0, path.lastIndexOf('/') + 1);
};

export const fetchResource = async (url) => {
  return await parseResponse(await fetch(url));
};
