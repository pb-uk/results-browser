// src/resource/resource.js

export class ResourceResponse {
  response: Response;
  ok: boolean;
  _body?: string;

  constructor(response: Response) {
    this.response = response;
    this.ok = response.ok;
  }

  get contentType(): string | null {
    const header = this.response.headers.get('Content-Type');
    if (header == null) {
      return null;
    }
    // Strip ;utf-8 or similar from string.
    const strip = header.indexOf(';');
    return strip < 0 ? header : header.substring(0, strip);
  }

  async getBody(): Promise<string> {
    if (this._body) return this._body;

    this._body = await this.response.text();
    return this._body;
  }
}
