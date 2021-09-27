import React from "react";
import Netflix from "./Netflix";
import Data from "./netflix.json";


const App = () => {
  return (
    <>
      <h1 className="heading_style">Netflix Series</h1>

      {Data.map((val) => {
        return <Netflix image={val.imgs} title={val.title} download={val.download} />;
      })}
      {/* <div className="footer">
        <p>created by Himal.B</p>
      </div> */}
    </>
  );
};

export default App;
