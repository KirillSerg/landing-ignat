import { Route, Routes } from "react-router-dom";
import Men from "./pages/men/Men";
import NotFound from "./pages/notFound/NotFound";
import { navTarget } from "./assets/mockData";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={`/${navTarget[1].en}`} element={<Men />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
