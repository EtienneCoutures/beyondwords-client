const environment = {
  production: true,
  api: "localhost:8080/api"
};


class Environment {
  public get api(): string {
    return environment.api;
  }
}

export const env = new Environment();