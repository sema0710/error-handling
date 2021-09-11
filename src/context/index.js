import React from "react";
import { useHistory } from "react-router-dom";
import Page404 from "../pages/404page";
import Page500 from "../pages/500page";

const ErrorStatusContext = React.createContext();

export const ErrorHandler = ({ children }) => {
  const history = useHistory();
  const [errorStatusCode, setErrorStatusCode] = React.useState();

  React.useEffect(() => {
    const unlisten = history.listen(() => setErrorStatusCode(undefined));
    return unlisten;
  }, []);

  const renderContent = () => {
    switch (errorStatusCode) {
      case 404: {
        return <Page404 />;
      }
      case 500: {
        return <Page500 />;
      }
      default: {
        return children;
      }
    }
  };

  const contextPayload = React.useMemo(
    () => ({ setErrorStatusCode, errorStatusCode }),
    [setErrorStatusCode, errorStatusCode]
  );

  console.log(renderContent());

  return (
    <ErrorStatusContext.Provider value={contextPayload}>
      {renderContent()}
    </ErrorStatusContext.Provider>
  );
};

export const useErrorStatus = () => React.useContext(ErrorStatusContext);
