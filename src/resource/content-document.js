// src/resource/content-resource.js

import { Resource } from './resource';

export class ContentDocument extends Resource {
  constructor(response) {
    super(response);
    this.isContent = true;
  }
}
