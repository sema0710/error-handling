import React from "react";
import { useErrorStatus } from "../context";

const Main = () => {
  const { setErrorStatusCode } = useErrorStatus();
  return (
    <div>
      <p>에러 이전의 메인 페이지</p>
      <button type="button" onClick={() => setErrorStatusCode(404)}>
        404 에러 발생시키기
      </button>
      <button type="button" onClick={() => setErrorStatusCode(500)}>
        500 에러 발생시키기
      </button>
    </div>
  );
};

export default Main;
