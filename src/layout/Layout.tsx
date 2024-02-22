import MainHeader from "../components/common/MainHeader";
import MainFooter from "../components/common/MainFooter";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen dark:bg-black dark:text-white">
      <MainHeader />
      <main>{children}</main>
      <MainFooter />
    </div>
  );
};

export default Layout;
