import { Link } from "react-router-dom";
import Dropdown from "./Dropdown.jsx";
import SearchBox from "./SearchBox.jsx";
import { useState } from "react";

const Header = ({ username, setUsername }) => {
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);
  return (
    <div className="flex justify-between pl-2 pr-6">
      <a
        className="cursor-pointer self-center bg-green-400 p-1 text-white"
        href="/"
        title="eShelf"
      >
        Màn Hình Chính
      </a>

      <div
        className={`mt-2 flex flex-row-reverse ${
          isSearchBoxOpen ? "gap-4" : "gap-12"
        }`}
      >
        <Dropdown />
        <SearchBox setIsSearchBoxOpen={setIsSearchBoxOpen} />
        {!username && (
          <Link
            to="auth"
            className="mt-2 text-blue-600 underline hover:text-blue-500"
          >
            Đăng nhập
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
