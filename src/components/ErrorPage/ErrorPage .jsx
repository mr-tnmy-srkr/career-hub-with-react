import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      className="flex
    flex-cols justify-center items-center h-screen text-center space-y-4"
    >
      <div className="">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>

        <div
          className="
      "
        >
          {error.status === 404 && (
            <div>
              <h3>404 page Not Found</h3>
              <p>Go Back to Home</p>
              <Link to="/">
                <button className="btn btn-secondary">Home</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
