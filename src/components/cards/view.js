import React from "react";
import { useSelector } from "react-redux";

function View() {
  const cards = useSelector(state => state.cards);

  return (
      <div>
        <h2>Existing Cards</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Card Number</th>
              <th>Balance</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            { cards.length > 0 && cards.map( (card, index) =>
                <tr key={index}>
                  <td>{card.name}</td>
                  <td>{card.number}</td>
                  <td>{card.balance}</td>
                  <td>{card.limit}</td>
                </tr>)
            }
          </tbody>
        </table>
      </div>)
}

export default View;
