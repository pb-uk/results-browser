// src/resource/error-resource.js

import { Resource } from './resource';
import { ResourceResponse } from './resource-response';

export class ErrorResource extends Resource {
  isError = true;

  /**
   * Create a new instance of a Resource object.
   *
   * @param response The response providing the resource.
   * @returns A promise for a new Resource object.
   */
  static async create(response: ResourceResponse): Promise<ErrorResource> {
    return new ErrorResource(response);
  }
}
