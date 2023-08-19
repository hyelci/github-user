import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getUserRepos } from "../features/github/githubUserSlice";
import { useParams } from "react-router";
import Repository from "../components/Repository";

const Repos = () => {
  const { userRepos } = useAppSelector((store) => store.githubUser);
  const dispatch = useAppDispatch();
  const { username } = useParams();

  useEffect(() => {
    if (username) {
      dispatch(getUserRepos(username));
    }
  }, [username]);

  return (
    <div className="bg-white py-8 sm:py-12 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Repositories List
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Repository Details
          </p>
        </div>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {userRepos.map((item) => {
            return <Repository item={item} key={item.id} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Repos;
