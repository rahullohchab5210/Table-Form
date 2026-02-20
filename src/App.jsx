import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FormPage from "./pages/FormPage";
 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
}
