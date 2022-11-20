import React from "react";
import loading from "../assets/loading.gif";

const Loading = () => {
  return (
    <>
      <div className="">
        <img className="my-3" src={loading} alt="loading" />
      </div>
    </>
  );
};

export default Loading;
