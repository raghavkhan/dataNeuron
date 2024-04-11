import React, { useState, useEffect } from "react";
import "./App.css";
import "./components/globalStyle.css";

// import Component1 from "./components/Component1";
// import Component2 from "./components/Component2";
// import Component3 from "./components/Component3";
import ListData from "./services/ListData";
import ResizableComponent from "./containers/resizeable-ui";

const App = () => {
  // const [isRefetch, setRefetch] = useState(false);
  // const [listData, setListData] = useState([]);

  // useEffect(() => {
  //   getData();
  // }, [isRefetch]);

  // const getData = async () => {
  //   const data = await ListData();
  //   console.log(data);
  //   setListData(data);
  // };

  return (
    <div className='app'>
      <ResizableComponent/>
      {/* <div className='upper'>
        <Component1 setRefetch={setRefetch} listData={listData}/>
        <Component2 setRefetch={setRefetch} listData={listData}/>
      </div>
      <div className='lower'>
        <Component3 setRefetch={setRefetch} listData={listData}/>
      </div> */}
    </div>
  );
};

export default App;
