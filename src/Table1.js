import React from 'react'
import './table1.css'

function Table1() {
    return (
        <div className="table1div">
        <p className="Table1_head1">Report Card</p>
        <h1 className="Table1_head2">ACADEMIC SESSION : 2020-2021</h1>
        <p></p>
     <table className="table1">
         <tr>
             <th>Name of the student</th>
             <th colSpan="2"><input className="input_field" type="text"/></th>
             <th>adm.no</th>
             <th colSpan="3"><input className="input_field" type="text"/></th>
         </tr>
         <tr>
             <td>Class & Sec.</td>
             <td colSpan="2"><input className="input_field" type="text"/></td>
             <td>roll no</td>
             <td><input className="input_field1" type="text"/></td>
             <td>dob</td>
             <td><input className="input_field1" type="text"/></td>
         </tr>
         <tr>
             <td>Mother's Name</td>
             <td colSpan="6"><input className="input_field" type="text"/></td>
             
         </tr>
         <tr>
             <td>Father's Name</td>
             <td colSpan="6"><input className="input_field" type="text"/></td>
            
         </tr>
     </table>
            
        </div>
    )
}

export default Table1
