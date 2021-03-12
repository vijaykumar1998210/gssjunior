import React from "react";
import "./table4.css";

function Table4() {
  return (
    <div className="table4div">
      <h5 className="grade_head">Grading Scale For Scholastic Areas</h5>
      <table className="table4">
        <tr>
          <td className="head25 ">MARKS RANGE</td>
          <td>GRADES</td>
        </tr>
        <tr>
          <td>91-100</td>
          <td>A1</td>
        </tr>
        <tr>
          <td>81-90</td>
          <td>A2</td>
        </tr>
        <tr>
          <td>71-80</td>
          <td>B1</td>
        </tr>
        <tr>
          <td>61-70</td>
          <td>B2</td>
        </tr>
        <tr>
          <td>51-60</td>
          <td>C1</td>
        </tr>
        <tr>
          <td>41-50</td>
          <td>C2</td>
        </tr>
        <tr>
          <td>33-40</td>
          <td>D</td>
        </tr>
        <tr>
          <td>32 & Below</td>
          <td>E (Needs Improvement)</td>
        </tr>
      </table>
    </div>
  );
}

export default Table4;
