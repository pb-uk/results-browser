// src/resource/resource.js

import { IndexDocument } from './index-document';
import { ContentDocument } from './content-document';
import { ErrorResource } from './error-resource';
import { Resource } from './resource';
import { ResourceResponse } from './resource-response';

// Export this for testing.
export const parseResponse = async (
  response: ResourceResponse
): Promise<Resource> => {
  if (!response.ok) {
    // Handle an error response.
    return await ErrorResource.create(response);
  }

  if (response.contentType === 'text/html') {
    const body = await response.getBody();
    if (body.search(/<title>Index of .*<h1>Index of /s) >= 0) {
      return await IndexDocument.create(response);
    }
    return await ContentDocument.create(response);
  }
  return await Resource.create(response);
};

export const getIndexUrl = (url: string): string => {
  const path = url.replace(location.hash, '');
  return path.substring(0, path.lastIndexOf('/') + 1);
};

export const fetchResource = async (url: string): Promise<Resource> => {
  const response = new ResourceResponse(await fetch(url));
  return parseResponse(response);
};
