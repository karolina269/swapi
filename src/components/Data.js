import axios from "axios";
import Buttons from "./Buttons";
import List from "./List";
import { useEffect, useState } from "react";

const Data = () => {
  const baseUrl = "https://swapi.dev/api/";

  const [dataCategories, setDataCategories] = useState([]);

  const [currentData, setCurrentData] = useState({});

  const getDataCategories = () => {
    axios
      .get(baseUrl)
      .then((res) => {
        setDataCategories(Object.keys(res.data));
      })
      .catch((error) => {
        console.log("error:", error);
      });
  };

  const getDataAbout = (category) => {
    axios
      .get(`${baseUrl}${category}`)
      .then((res) => {
        setCurrentData(res.data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  };

  useEffect(() => {
    getDataCategories();
  }, []);

  return (
    <div>
      <Buttons dataCategories={dataCategories} getDataAbout={getDataAbout} />
      <List currentData={currentData} />
    </div>
  );
};

export default Data;
