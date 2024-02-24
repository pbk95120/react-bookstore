import logo from "../../assets/images/logo.png";

const CATEGORY = [
  { id: null, name: "전체" },
  { id: 0, name: "동화" },
  { id: 1, name: "소설" },
  { id: 2, name: "사회" },
];

const MainHeader = () => {
  return (
    <header className="flex justify-between	items-center py-5 px-0 border-b border-solid border-grey w-full my-0 mx-auto max-w-screen-lg">
      <h1 className="logo">
        <img src={logo} alt="book store" className="w-48" />
      </h1>
      <nav>
        <ul className="flex gap-8">
          {CATEGORY.map((item) => (
            <li key={item.id}>
              <a
                href={
                  item.id === null ? "/books" : `/books?category_id=${item.id}`
                }
                className="font-medium font-semibold no-underline hover:text-brown"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <nav>
        <ul className="flex gap-4">
          <li>
            <a href="/login">로그인</a>
          </li>
          <li>
            <a href="/signup">회원가입</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
