import axios from "axios";
import Buttons from "./Buttons";
import List from "./List";
import { settings } from "../settings";
import { useEffect, useState } from "react";

const Data = () => {
  const [dataCategories, setDataCategories] = useState([]);

  const [currentCategory, setCurrentCategory] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const getDataCategories = () => {
    axios
      .get(settings.baseUrl)
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

  return (
    <div>
      <Buttons
        dataCategories={dataCategories}
        setCurrentCategory={setCurrentCategory}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isLoading={isLoading}
      />
      <List
        baseUrl={settings.baseUrl}
        currentCategory={currentCategory}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Data;
