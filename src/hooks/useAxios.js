import React, { useState } from "react";
import axios from "axios";
import uuid from "uuid";

const useAxios = (url) => {
  const [data, setData] = useState([]);
  const addData = async function () {
    try {
      let res = await axios.get(url);
      setData((data) => [...data, { ...res.data, id: uuid() }]);
      return res.data;
    } catch (err) {
      alert(err);
    }
  };
  return [data, addData];
};

export default useAxios;
