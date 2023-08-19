import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 justify-between">
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <Link to="/">
              <img
                className="h-8 w-auto"
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="Github"
              />
            </Link>
          </div>
          <div className="flex ml-6 space-x-8">
            <Link
              to="/"
              className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
