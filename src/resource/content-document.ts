// src/resource/content-resource.js

import { Resource } from './resource';
import { ResourceResponse } from './resource-response';

export class ContentDocument extends Resource {
  isContent = true;

  /**
   * Create a new instance of a ContentDocument object.
   *
   * @param response The response providing the document.
   * @returns A promise for a new ContentDocument object.
   */
  static async create(response: ResourceResponse): Promise<ContentDocument> {
    const instance = new ContentDocument();
    instance._body = await response.getBody();
    return instance;
  }
}
