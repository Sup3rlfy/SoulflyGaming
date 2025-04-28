// src/app/modules.ts
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter, withHashLocation  } from '@angular/router';
import { routes } from './app.routes';

export const appProviders = [
  importProvidersFrom(BrowserModule),
  provideRouter(routes, withHashLocation())
];