import { Routes, Route } from "react-router-dom";

import "./App.css";

import Forgotpassword from "./Components/Forgotpassword";
import Msg from "./Components/Msg";
import Resetpassword from "./Components/Resetpassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Forgotpassword />} />
        <Route path="/resetpassword/:pass_token" element={<Resetpassword />} />
        <Route path="/msg" element={<Msg />} />
      </Routes>

      <ToastContainer autoclose={7000} />
    </div>
  );
}

export default App;
