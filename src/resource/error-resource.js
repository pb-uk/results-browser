// src/resource/error-resource.js

import { Resource } from './resource';

export class ErrorResource extends Resource {
  constructor(response) {
    super(response);
    this.isError = true;
  }
}
