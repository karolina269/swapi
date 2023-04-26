const List = (props) => {
  console.log(props.currentData.results);
  return (
    <div>
      {props.currentData.results &&
        props.currentData.results.map((item) => {
          return <p key={item.created}>{item.name ? item.name : item.title}</p>;
        })}
    </div>
  );
};
export default List;
