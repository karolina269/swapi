import { useState } from "react";
import ItemDetails from "./ItemDetails";

const Item = (props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <li className="item" key={props.item.created}>
        <h2 onClick={() => setIsActive(!isActive)}>{props.item.name ? props.item.name : props.item.title}</h2>
        {isActive && <ItemDetails item={props.item} />}
      </li>
    </>
  );
};

export default Item;
