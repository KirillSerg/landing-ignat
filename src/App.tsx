import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Men from "./pages/men/Men";
import NotFound from "./pages/notFound/NotFound";
import { navTarget } from "./assets/mockData";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/${navTarget[1].en}`} element={<Men />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
};

export default App;
