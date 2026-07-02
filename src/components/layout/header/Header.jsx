import { Link } from "react-router-dom";
import Dropdown from "./Dropdown.jsx";
import SearchBox from "./SearchBox.jsx";
import { useState } from "react";

const Header = ({ username, setUsername }) => {
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 px-4">
      <a
        className="cursor-pointer self-center bg-green-400 p-1 text-white"
        href="/"
        title="eShelf"
      >
        Màn Hình Chính
      </a>

      <div
        className={`mt-2 flex flex-wrap items-center justify-end ${
          isSearchBoxOpen ? "gap-2" : "gap-4"
        }`}
      >
        {!username && (
          <Link
            to="auth"
            className="mt-2 text-blue-600 underline hover:text-blue-500"
          >
            Đăng nhập
          </Link>
        )}
        <SearchBox setIsSearchBoxOpen={setIsSearchBoxOpen} />
        <Dropdown />
      </div>
    </div>
  );
};

export default Header;
