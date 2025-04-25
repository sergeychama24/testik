import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import { Provider } from "react-redux";
import { store } from "./store";
import { AppLayout } from "../ui/AppLayout/AppLayout.tsx";
import { ProductList } from "../features/product/ProductList.tsx";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate to="/food" replace />} />
            <Route path="food" element={<ProductList type={"food"} key='food'/>} />
            <Route path="tech" element={<ProductList type={"tech"} key='tech'/>} />
            <Route path="clothes" element={<ProductList type={"clothes"} key='clothes'/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
