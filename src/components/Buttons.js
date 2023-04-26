const Buttons = (props) => {
  return (
    <div>
      {props.dataCategories.map((category, index) => {
        return (
          <button key={index} onClick={() => props.getDataAbout(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Buttons;
