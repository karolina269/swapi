import "./ItemDetails.css";

const ItemDetails = (props) => {
  const details = Object.entries(props.item);
  return (
    <table className="itemDetails">
      <tbody>
        {details.map((detail, index) => {
          return (
            <tr className="tableRow" key={index}>
              <td className="key">{detail[0]}:</td> <td className="value">{detail[1]}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ItemDetails;
