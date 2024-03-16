import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/notFound/NotFound";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <>
      {/* <Header /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/contacts" element={<Home />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
};

export default App;
