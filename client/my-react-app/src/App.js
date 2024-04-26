import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar/Navbar.js";
import DisplayFoodList from "./components/DisplayFoodList/DisplayFoodList.js";
import EditFood from "./components/EditFood/EditFood.js";
import AddFood from "./components/AddFood/AddFood.js";
import AddUser from "./components/AddUser/AddUser.js";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <br />
        <Routes>
          <Route path="/" exact element={<DisplayFoodList />} />
          <Route path="/edit/:id" element={<EditFood />} />
          <Route path="/create" element={<AddFood />} />
          <Route path="/user" element={<AddUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;