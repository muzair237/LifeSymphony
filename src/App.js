import React from "react";

//import Scss
import "../src/assets/scss/themes.scss";
import "./App.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

//imoprt Route
import Route from "./Routes";

function App() {
  return (
    <React.Fragment>
      <Route />
      <ToastContainer 
        closeButton={false}
        pauseOnHover={false}
        newestOnTop={true}
        autoClose={2200}
        limit={1} />
    </React.Fragment>
  );
}

export default App;
