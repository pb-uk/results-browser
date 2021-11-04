// src/resource/index-resource.js

import { Resource } from './resource';
import { ResourceResponse } from './resource-response';

export class IndexDocument extends Resource {
  isIndex = true;

  /**
   * Create a new instance of an IndexDocument object.
   *
   * @param response The response providing the document.
   * @returns A promise for a new IndexDocument object.
   */
  static async create(response: ResourceResponse): Promise<IndexDocument> {
    const instance = new IndexDocument();
    instance._body = await response.getBody();
    return instance;
  }
}
