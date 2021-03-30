import React, { useState } from "react";
import Photo from "./Photo";
import "./App.css";
import Header from "./Header";
import Table1 from "./Table1";
import Table2 from "./Table2";
import Table3 from "./Table3";
import Table4 from "./Table4";
import TeacherRemarks from "./TeacherRemarks";

import TeacherSign from "./TeacherSign";
import Table5 from "./Table5";

function App() {
  const [hide, setHide] = useState(true);
  return (
    <div className="App">
      <Header />
      <div
        className="photo_container"
        onDoubleClick={() => {
          setHide(!hide);
        }}
      >
        {/* <button className="photo-btn">hello</button> */}

        {hide ? <Photo /> : null}
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
export default App;
