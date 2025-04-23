import { BrowserRouter, Route, Routes } from "react-router";
import { AppLayout } from "../ui/AppLayout/AppLayout.tsx";
import { Products } from "../features/product/Products.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
