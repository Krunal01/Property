import React from "react";
import { ToastContainer } from "react-toastify";
import RootRoutes from "./routes/RootRoutes";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <RootRoutes />
    </React.Fragment>
  );
}

export default App;
