import React from "react";
import "./table5.css";

function Table5() {
  return (
    <div className="table5div">
      <table className="table5">
        <tr>
          <th className="t51">Other Subjects</th>
          <th colSpan="2">Term 1</th>
          <th colSpan="2">Term 2</th>
        </tr>
        <tr>
          <th className="t51"></th>
          <th>Marks</th>
          <th>Grade</th>
          <th>Marks</th>
          <th>Grade</th>
        </tr>
        <tr>
          <td className="t51">General Knowledge</td>
          <td className="t3">
            <input className="input_field12" type="text" />
          </td>
          <td className="t3">
            <input className="input_field12" type="text" />
          </td>
          <td className="t3">
            <input className="input_field12" type="text" />
          </td>
          <td className="t3">
            <input className="input_field12" type="text" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Table5;
