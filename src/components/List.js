import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import LoadingSpinner from "./LoadingSpinner";
import Item from "./Item";
import "./List.css";

const List = (props) => {
  const [pageContent, setPageContent] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [pageNumbers, setPageNumbers] = useState([]);

  const getPageContent = () => {
    props.setIsLoading(true);
    axios
      .get(`${props.baseUrl}${props.currentCategory}/?page=${props.currentPage}`)
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
  }, [props.currentPage]);

  useEffect(() => {
    getPageContent();
  }, [props.currentCategory]);

  useEffect(() => {
    setNumberOfPages(Math.ceil(pageContent.count / 10));
  }, [pageContent]);

  useEffect(() => {
    let tempPageNumbers = [];
    for (let i = 1; i <= numberOfPages; i++) {
      tempPageNumbers.push(i);
    }
    setPageNumbers(tempPageNumbers);
  }, [numberOfPages]);

  return (
    <div className="list">
      {props.isLoading && <LoadingSpinner />}
      {!props.isLoading && (
        <>
          <ul className="itemsList">
            {pageContent.results &&
              pageContent.results.map((item) => {
                return <Item item={item} key={item.created} />;
              })}
          </ul>
          <Pagination pageNumbers={pageNumbers} currentPage={props.currentPage} setCurrentPage={props.setCurrentPage} />
        </>
      )}
    </div>
  );
};
export default List;
