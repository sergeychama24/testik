import { BrowserRouter, Route, Routes } from "react-router";
import { AppLayout } from "../ui/AppLayout/AppLayout.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<div>HOMEPAGE</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
