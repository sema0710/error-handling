import React from "react";

const useErrorHandler = () => {
  const [statusCode, setStatusCode] = React.useState();

  return { statusCode, setStatusCode };
};

export default useErrorHandler;
