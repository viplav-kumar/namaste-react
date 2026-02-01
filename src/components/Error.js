import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="w-full min-h-screen py-15 px-[8%] flex items-center justify-between bg-[#fafafa] box-border">
      <div className="w-[50%] flex flex-col gap-5">
        <h1 className="text-[120px] font-extrabold text-[#ff6b6b] m-0">404</h1>
        <h2 className="text-[36px] font-bold text-[#222] m-0">
          Oops! Something Went Wrong
        </h2>
        <p className="text-[18px] leading-[1.6] text-[#555] max-w-130">
          The page you’re looking for might be moved, deleted, or temporarily
          unavailable.
        </p>

        <button
          className="mt-5 py-3.5 px-6.5 text-[16px] bg-[#ff6b6b] text-white border-none rounded-md cursor-pointer w-fit transition-all duration-300 ease-in-out hover:bg-[#e15656]"
          onClick={() => (window.location.href = "/")}
        >
          Go Back Home
        </button>
      </div>

      <div className="w-[45%] flex items-center justify-center">
        <img
          className="w-full max-w-120"
          src="/images/error-illustration.png"
          alt="Error Illustration"
        />
      </div>
    </div>
  );
};

export default Error;
