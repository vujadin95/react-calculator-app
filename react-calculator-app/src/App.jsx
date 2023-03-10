import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Photos from "./pages/Photos";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Photos />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
