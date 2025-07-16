// import { registerApplication, start } from "single-spa";
// import {
//   constructApplications,
//   constructRoutes,
//   constructLayoutEngine,
// } from "single-spa-layout";
// import microfrontendLayout from "./microfrontend-layout.html";

// const routes = constructRoutes(microfrontendLayout);
// const applications = constructApplications({
//   routes,
//   loadApp({ name }) {
//     return import(/* webpackIgnore: true */ name);
//   },
// });
// const layoutEngine = constructLayoutEngine({ routes, applications });

// applications.forEach(registerApplication);
// layoutEngine.activate();
// start();
// src/bytebank-root-config.ts

// src/bytebank-root-config.ts

import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

// Lê o arquivo de layout HTML
const routes = constructRoutes(microfrontendLayout);

// Cria as aplicações com base nas tags <application> encontradas no layout
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});

// Cria o motor de layout que gerencia tudo
const layoutEngine = constructLayoutEngine({ routes, applications });

// Registra as aplicações no single-spa
applications.forEach(registerApplication);

// Inicia o motor de layout e o single-spa
layoutEngine.activate();
start();