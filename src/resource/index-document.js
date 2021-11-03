// src/resource/index-resource.js

import { Resource } from './resource';

export class IndexDocument extends Resource {
  constructor(response) {
    super(response);
    this.isIndex = true;
  }
}
