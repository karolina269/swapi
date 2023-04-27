import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import LoadingSpinner from "./LoadingSpinner";
import "./List.css";

const List = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageContent, setPageContent] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [pageNumbers, setPageNumbers] = useState([]);

  const getPageContent = () => {
    props.setIsLoading(true);
    axios
      .get(`${props.baseUrl}${props.currentCategory}/?page=${currentPage}`)
      .then((res) => {
        setPageContent(res.data);
        props.setIsLoading(false);
      })
      .catch((error) => {
        console.log("error:", error);
        props.setIsLoading(false);
      });
  };

  useEffect(() => {
    getPageContent();
  }, [currentPage, props.currentCategory]);

  useEffect(() => {
    setCurrentPage(1);
  }, [props.currentCategory]);

  useEffect(() => {
    setNumberOfPages(Math.ceil(props.currentDataCount / 10));
  }, [props.currentDataCount]);

  useEffect(() => {
    let tempPageNumbers = [];
    for (let i = 1; i <= numberOfPages; i++) {
      tempPageNumbers.push(i);
    }
    setPageNumbers(tempPageNumbers);
  }, [numberOfPages]);

  return (
    <div>
      {props.isLoading && <LoadingSpinner />}
      {!props.isLoading && (
        <ul className="itemsList">
          {pageContent.results &&
            pageContent.results.map((item) => {
              return <li key={item.created}>{item.name ? item.name : item.title}</li>;
            })}
        </ul>
      )}
      <Pagination pageNumbers={pageNumbers} currentPage={currentPage} setCurrentPage={setCurrentPage} isLoading={props.isLoading} />
    </div>
  );
};
export default List;
