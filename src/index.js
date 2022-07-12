import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import LayoutFour from "./components/Layout/LayoutFour";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LayoutFour />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





// import LayoutFour from "./components/Layout/LayoutFour";
// import {connect} from "react-redux";
//
// const Home = () => {
//     return <LayoutFour />
//
// }
//
// export default connect(Home);