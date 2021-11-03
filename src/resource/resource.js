// src/resource/resource.js

export class Resource {
  constructor(response) {
    this.isIndex = false;
    this.isContent = false;
    this.isError = false;
    this.response = response;
  }
}
