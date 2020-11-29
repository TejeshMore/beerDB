import { AppService } from "./app.service";
import { RestService } from './rest.service';

export * from "./app.service";
export * from "./rest.service";

export const services = [
  AppService,
  RestService
];
