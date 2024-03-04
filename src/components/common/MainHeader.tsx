import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaSignInAlt, FaRegUser } from "react-icons/fa";
import { useCategory } from "../../hooks/useCategory";
import { useAuthStore } from "../../store/authStore";

/**
 * Main Header컴포넌트
 */
const MainHeader = () => {
  const { category } = useCategory();
  const { isLoggedIn, storeLogout } = useAuthStore();

  return (
    <header className="flex justify-between	items-center py-5 px-0 border-b border-solid  w-full my-0 mx-auto max-w-screen-lg">
      <h1 className="logo">
        <img src={logo} alt="book store" className="w-48" />
      </h1>
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
        {isLoggedIn && (
          <ul className="flex gap-4 items-center">
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
          <ul className="flex gap-4">
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
      </nav>
    </header>
  );
};

export default MainHeader;
