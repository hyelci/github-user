import { render } from "@testing-library/react";
import Repository from "./Repository";
import { UserRepo } from "../model/githubInterface";

const repo: UserRepo = {
  id: 1,
  full_name: "sample repo",
  name: "repo name",
  language: "JavaScript",
  owner: {
    login: "user",
  },
  forks_count: "129",
  stargazers_count: 349,
};

describe("Repository component", () => {
  it("should render repository", () => {
    const { getByText } = render(<Repository item={repo} />);
    expect(getByText(repo.full_name)).toBeInTheDocument();
    expect(getByText(repo.name)).toBeInTheDocument();
  });
});
