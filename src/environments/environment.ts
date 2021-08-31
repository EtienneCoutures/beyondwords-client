// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
  production: false,
  api: "http://localhost:8080/api"
};


class Environment {
  public get api(): string {
    return environment.api;
  }

  public get prod(): boolean {
    return environment.production
  }
}

export const env = new Environment();

