import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={"Load..."}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
