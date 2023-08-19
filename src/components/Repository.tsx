import { UserRepo } from "../model/githubInterface";
import { StarIcon, ShareIcon } from "@heroicons/react/20/solid";

interface RepositoryProps {
  item: UserRepo;
}

const Repository = ({ item }: RepositoryProps) => {
  return (
    <div>
      <li
        key={item.id}
        className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
      >
        <div className="flex w-full items-center justify-between space-x-6 p-6">
          <div className="flex-1 truncate">
            <div className="flex items-center space-x-3">
              <h3 className="truncate text-sm font-medium text-gray-900">
                {item.full_name}
              </h3>
              {item.language && (
                <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {item.language}
                </span>
              )}
            </div>
            <p className="mt-1 truncate text-sm text-gray-500">{item.name}</p>
          </div>
        </div>
        <div>
          <div className="-mt-px flex divide-x divide-gray-200 py-2">
            <div className="flex w-0 flex-1 ">
              <StarIcon
                className="h-5 w-5 text-gray-400 mx-2"
                aria-hidden="true"
              />
              {item.stargazers_count}
            </div>
            <div className="-ml-px flex w-0 flex-1">
              <ShareIcon
                className="h-5 w-5 text-gray-400 mx-2"
                aria-hidden="true"
              />
              {item.forks_count}
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default Repository;
