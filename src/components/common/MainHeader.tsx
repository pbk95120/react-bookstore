import { Link } from "react-router-dom";
import { FaSignInAlt, FaRegUser, FaUserCircle } from "react-icons/fa";
import logo from "@/assets/images/logo.png";
import { useCategory } from "@/hooks/useCategory";
import { useAuthStore } from "@/store/authStore";
import Dropdown from "@/components/common/Dropdown";

/**
 * Main Header컴포넌트
 */
const MainHeader = () => {
  const { category } = useCategory();
  const { isLoggedIn, storeLogout } = useAuthStore();

  return (
    <header className="flex justify-between	items-center py-5 px-0 border-b border-solid  w-full my-0 mx-auto max-w-screen-lg">
      <Link to={"/"}>
        <h1 className="logo">
          <img src={logo} alt="book store" className="w-48" />
        </h1>
      </Link>
      <nav>
        <ul className="flex gap-8">
          {category.map((item) => (
            <li key={item.category_id}>
              <Link
                to={
                  item.category_id === null
                    ? "/books"
                    : `/books?category_id=${item.category_id}`
                }
                className="text-medium font-semibold no-underline hover:text-orange"
              >
                {item.categoryName}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav>
        <Dropdown
          toggleButton={(isOpen) => (
            <FaUserCircle
              className={`w-7 h-7 ${isOpen ? "fill-orange" : "fill-black"}`}
            />
          )}
        >
          <>
            {isLoggedIn && (
              <ul className="flex flex-col justify-center items-center gap-4 w-24">
                <li>
                  <Link
                    to="/cart"
                    className="text-small font-semibold no-underline leading-4"
                  >
                    장바구니
                  </Link>
                </li>
                <li>
                  <Link
                    to="/orderList"
                    className="text-small font-semibold no-underline leading-4"
                  >
                    주문내역
                  </Link>
                </li>
                <li>
                  <button
                    onClick={storeLogout}
                    className="text-small font-semibold no-underline leading-4"
                  >
                    로그아웃
                  </button>
                </li>
              </ul>
            )}
            {!isLoggedIn && (
              <ul className="flex flex-col justify-center items-center gap-4 w-24">
                <li>
                  <Link
                    to={"/login"}
                    className="text-small font-semibold no-underline flex items-center leading-4"
                  >
                    <FaSignInAlt className="mr-2" />
                    로그인
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/signup"}
                    className="text-small font-semibold no-underline flex items-center leading-4"
                  >
                    <FaRegUser className="mr-2" />
                    회원가입
                  </Link>
                </li>
              </ul>
            )}
          </>
        </Dropdown>
      </nav>
    </header>
  );
};

export default MainHeader;
