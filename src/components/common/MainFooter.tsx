import logo from "../../assets/images/logo.png";

/**
 * Main Footer 컴포넌트
 */
const MainFooter = () => {
  return (
    <footer className="w-full mx-auto max-w-screen-lg border-t border-solid border-grey py-5 flex justify-between">
      <h1 className="logo">
        <img src={logo} alt="book store" className="w-48" />
      </h1>
      <div>
        <a className="text-xs">copyright(c), 2024, book store.</a>
      </div>
    </footer>
  );
};

export default MainFooter;
