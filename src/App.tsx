import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Repos from "./pages/Repos";
import SharedLayout from "./pages/SharedLayout";

function App() {
  return (
    <Routes>
      <Route path="" element={<SharedLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/repos/:username" element={<Repos />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
