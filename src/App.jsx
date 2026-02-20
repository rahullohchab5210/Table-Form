import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
 
import FormPage from "./pages/FormPage";
import UserList from "./components/UserList";
 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
}