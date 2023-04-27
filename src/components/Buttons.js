import "./Buttons.css";

const Buttons = (props) => {
  const buttonHandler = (category) => {
    props.getDataLength(category);
    props.setCurrentCategory(category);
  };

  return (
    <div className="buttons">
      {props.dataCategories.map((category, index) => {
        return (
          <button className="btn" key={index} onClick={() => buttonHandler(category)} disabled={props.isLoading}>
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Buttons;
