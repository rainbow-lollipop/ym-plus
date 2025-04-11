import type { App, Plugin } from 'vue';

export type SFCWithInstall<T> = T & Plugin;

export const withInstall = <T>(com: T) => {
  (com as SFCWithInstall<T>).install = function (app: App) {
    app.component((com as any).name, com as SFCWithInstall<T>);
  }
  return com;
}