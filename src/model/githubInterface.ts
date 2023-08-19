export interface FilterRequest {
  query: string;
}

export interface User {
  id: number;
  login: string;
  avatar_url: string;
  public_repos: number;
}

export interface UserRepo {
  id: number;
  name: string;
  full_name: string;
  stargazers_count: number;
  forks_count: string;
  owner: { login: string };
  language: string;
}
