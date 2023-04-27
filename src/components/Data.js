import axios from "axios";
import Buttons from "./Buttons";
import List from "./List";
import { useEffect, useState } from "react";

const Data = () => {
  const [dataCategories, setDataCategories] = useState([]);

  const [currentDataCount, setCurrentDataCount] = useState(null);

  const [currentCategory, setCurrentCategory] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const baseUrl = "https://swapi.dev/api/";

  const getDataCategories = () => {
    axios
      .get(baseUrl)
      .then((res) => {
        setDataCategories(Object.keys(res.data));
      })
      .catch((error) => {
        console.log("error getDataCategories:", error);
      });
  };

  useEffect(() => {
    getDataCategories();
  }, []);

  const getDataLength = (category) => {
    axios
      .get(`${baseUrl}${category}`)
      .then((res) => {
        setCurrentDataCount(res.data.count);
      })
      .catch((error) => {
        console.log("error getDataLength:", error);
      });
  };

  return (
    <div>
      <Buttons dataCategories={dataCategories} getDataLength={getDataLength} setCurrentCategory={setCurrentCategory} isLoading={isLoading} />
      <List currentDataCount={currentDataCount} baseUrl={baseUrl} currentCategory={currentCategory} setIsLoading={setIsLoading} isLoading={isLoading} />
    </div>
  );
};

export default Data;
