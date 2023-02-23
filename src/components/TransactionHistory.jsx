import PropTypes from "prop-types";
import {StyledTransactionHistory} from '../styled/TransactionHistory.styled'
export function TransactionHistory({ items }) { 
    return (
<StyledTransactionHistory>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
    </thead>
    <tbody>
        {items.map((item,index) => (
        <tr className={index%2!==0?"tr--grey":null}  key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
        </tr>
        ))}
    </tbody>
</StyledTransactionHistory>
    );
}

TransactionHistory.propTypes = {

     items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired).isRequired).isRequired


}