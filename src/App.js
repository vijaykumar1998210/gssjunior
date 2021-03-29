import React ,{useRef}from "react";
import "./App.css";
import Header from "./Header";
import Photo from "./Photo";
import Table1 from "./Table1";
import Table2 from "./Table2";
import Table3 from "./Table3";
import Table4 from "./Table4";
import TeacherRemarks from "./TeacherRemarks";
import { useReactToPrint } from "react-to-print";
import TeacherSign from "./TeacherSign";
import Table5 from "./Table5";

export class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="photo_container">
          
        </div>
        <Table1 />
        <Table2 />
        <Table5 />
        <Table3 />
        <TeacherRemarks />
        <Table4 />
        <TeacherSign />
        
        <div
          className="bg_gradient"
          style={{
            backgroundImage: `Url(${
              process.env.PUBLIC_URL +
              "/Images/IMG-20210216-WA0010-removebg-preview.png"
            })`,
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    );
  }
}

const Example1 = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="printout">
      <App ref={componentRef} />
      {/* <button className="print" onClick={handlePrint} style={{}}>
        Print this out!
      </button> */}
    </div>
  );
};
export default Example1;
