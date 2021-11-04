// src/resource/resource.js

import { ResourceResponse } from './resource-response';

export class Resource {
  isIndex = false;
  isContent = false;
  isError = false;
  response?: ResourceResponse;
  _body?: string;

  constructor(response?: ResourceResponse) {
    this.response = response;
  }

  /**
   * Create a new instance of a Resource object.
   *
   * @param response The response providing the resource.
   * @returns A promise for a new Resource object.
   */
  static async create(response: ResourceResponse): Promise<Resource> {
    return new Resource(response);
  }
}
