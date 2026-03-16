import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <Header />

        <div className="page-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;