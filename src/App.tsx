import "./App.css";
import Accounts from "./components/Accounts";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import Campaign from "./components/Campaign";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/accounts" element={<Accounts />}></Route>
          <Route path="/accounts/:id" element={<Profile/>}></Route>
          <Route path="/accounts/:id/campaign" element={<Campaign/>}></Route>
          <Route path='*' element={<Navigate to={'/accounts'}/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
