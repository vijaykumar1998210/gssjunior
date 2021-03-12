import React from "react";
import "./table3.css";

function Table3() {
  return (
    <div className="table3div">
      <table className="table3">
        <tr>
          <th>PERSONAL TRAITS <br/>
          On a 3-Point (A-C) Grading Scale</th>
          <th className="t3">TERM 1</th>
          <th className="t3">TERM 2</th>
          <th>PERSONAL TRAITS <br/>
          On a 3-Point (A-C) Grading Scale</th>
          <th className="t3">TERM 1</th>
          <th className="t3">TERM 2</th>
          
        </tr>
        <tr>
          <th></th>
          <th className="t3">GRADE</th>
          <th className="t3">GRADE</th>
          <th></th>
          <th className="t3 t4">GRADE</th>
          <th className="t3 t4">GRADE</th>
        
        </tr>
        <tr>
            <td>Punctuality and Regularity</td>
            <td className="t3"><input className="input_field12" type="text"/></td>
            <td className="t3"><input className="input_field12" type="text"/></td>
            <td>Uniform And Neatness</td>
            <td className="t3"><input className="input_field12" type="text"/></td>
            <td className="t3"><input className="input_field12" type="text"/></td>
           
        </tr>
        <tr>
            <td>Art Education</td>
            <td className="t3"><input className="input_field12" type="text"/></td>
            <td className="t3"><input className="input_field12" type="text"/></td>
            <td>Manners and Politeness</td>
            <td className="t3"><input className="input_field12" type="text"/></td>
            <td className="t3"><input className="input_field12" type="text"/></td>
 
        </tr>
        <tr>
            <td>Health & Physical Education</td>
            <td className="t3"><input className="input_field12" type="text"/></td>
            <td className="t3"><input className="input_field12" type="text"/></td>
            <td>Self Confidence</td>
            <td className="t3"><input className="input_field12" type="text"/></td>
            <td className="t3"><input className="input_field12" type="text"/></td>
           
        </tr>
        <tr>
            <td>Discipline</td>
            <td className="t3"><input className="input_field12" type="text"/></td>
            <td className="t3"><input className="input_field12" type="text"/></td>
            <td>Attitude towards Classmates</td>
            <td className="t3"> <input className="input_field12" type="text"/></td>
            <td className="t3"> <input className="input_field12" type="text"/></td>
           
        </tr>
      </table>
    </div>
  );
}

export default Table3;
