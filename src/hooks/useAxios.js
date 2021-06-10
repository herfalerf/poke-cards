import React, { useState } from "react";
import axios from "axios";
import uuid from "uuid";

const useAxios = (url) => {
  const [data, setData] = useState([]);
  const addData = async function (option) {
    try {
      let reqUrl;
      if (typeof option === "string") {
        reqUrl = url + option;
      } else {
        reqUrl = url;
      }
      let res = await axios.get(reqUrl);
      setData((data) => [...data, { ...res.data, id: uuid() }]);
      return res.data;
    } catch (err) {
      alert(err);
    }
  };

  const resetData = () => {
    setData([]);
  };
  return [data, addData, resetData];
};

export default useAxios;
