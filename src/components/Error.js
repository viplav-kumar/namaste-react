import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Oops! Something Went Wrong</h2>
        <p className="error-description">
          The page you’re looking for might be moved, deleted, or temporarily
          unavailable.
        </p>

        <button
          className="error-btn"
          onClick={() => (window.location.href = "/")}
        >
          Go Back Home
        </button>
      </div>

      <div className="error-illustration">
        <img src="/images/error-illustration.png" alt="Error Illustration" />
      </div>
    </div>
  );
};

export default Error;
