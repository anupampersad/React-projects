import React, { useEffect }  from "react";
import { getData } from "./fetch";

const FetchStremableData = () => {
  useEffect(() => {
    getData()
  }, []);

  return <div>FetchStremableData</div>;
};

export default FetchStremableData;
