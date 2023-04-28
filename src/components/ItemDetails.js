import "./ItemDetails.css";

const ItemDetails = (props) => {
  const details = Object.entries(props.item);
  return (
    <table className="itemDetails">
      <tbody>
        {details.map((detail, index) => {
          return (
            <tr className="tableRow" key={index}>
              <td className="key">{detail[0]}:</td>
              <td className="value">
                {detail[1].length === 0 && "-"}
                {!Array.isArray(detail[1]) && detail[1]}
                {Array.isArray(detail[1]) && detail[1].length != 0 && (
                  <ul>
                    {detail[1].map((value) => {
                      return <li key={value}>{value}</li>;
                    })}
                  </ul>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ItemDetails;
