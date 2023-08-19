import { useEffect, useState } from "react";
import { FilterRequest } from "../model/githubInterface";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getUserDetails } from "../features/github/githubUserSlice";
import { Link } from "react-router-dom";

const initialState: FilterRequest = {
  query: "",
};

const Home = () => {
  const { userDetails } = useAppSelector((store) => store.githubUser);
  const [filter, setFilter] = useState(initialState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserDetails(filter));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setFilter({ ...filter, [name]: value });
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getUserDetails(filter));
  };

  return (
    <div className="bg-white px-6 py-8 lg:px-8">
      <div className="bg-white px-6 py-8 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Let's find a GitHub Account
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="query"
            id="name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="facebook"
            onChange={handleChange}
          />
        </form>

        {!userDetails.login && (
          <p className="pt-4">Please enter a github username, eg: facebook</p>
        )}

        {userDetails.login && (
          <>
            <figure className="mt-16">
              <img
                className="aspect-video rounded-xl bg-gray-50 object-cover w-64"
                src={userDetails.avatar_url}
                alt=""
              />
            </figure>
            <div className="mt-16 max-w-2xl">
              <p className="text-2xl font-bold tracking-tight text-gray-900">
                User Name: {userDetails.login}
              </p>

              <Link
                to={"/repos/" + userDetails.login}
                className="text-blue-400 underline"
              >
                Reposityories: {userDetails.public_repos}
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
