import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  config;
  constructor() { }

  setConfig(config) {
    this.config = config;
  }

  getConfigParam(param) {
    return this.config[param];
  }
}
