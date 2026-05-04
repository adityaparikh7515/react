// App.jsx
import React from "react";
import DataTable from "./components/Datatale";
// import "./styles.css";

const App = () => {
  return (
    <div className="app-container">
      <h1 className="title">User Management Table</h1>
      <DataTable/>
    </div>
  );
};

export default App;