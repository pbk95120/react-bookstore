import MainHeader from "../components/common/MainHeader";
import MainFooter from "../components/common/MainFooter";

/**
 * Layout component
 */
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen dark:bg-black dark:text-white">
      <MainHeader />
      <main className="w-full mx-auto max-w-screen-lg py-5">{children}</main>
      <MainFooter />
    </div>
  );
};

export default Layout;
