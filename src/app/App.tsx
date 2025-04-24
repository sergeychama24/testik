import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import { AppLayout } from "../ui/AppLayout/AppLayout.tsx";
import { Products } from "../features/product/Products.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/food" replace />} />
          <Route path="food" element={<Products type={"food"} />} />
          <Route path="tech" element={<Products type={"tech"} />} />
          <Route path="clothes" element={<Products type={"clothes"} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
