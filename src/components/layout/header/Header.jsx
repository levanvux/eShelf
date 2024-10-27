import { Link } from "react-router-dom";
import Dropdown from "./Dropdown.jsx";
import SearchBox from "./SearchBox.jsx";
import { useState } from "react";

const Header = () => {
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);
  return (
    <div className="flex justify-between pl-2 pr-6">
      <a
        className="bg-green-400 text-white p-1 self-center cursor-pointer"
        href="/"
        title="eShelf"
      >
        Màn Hình Chính
      </a>

      <div
        className={`flex flex-row-reverse mt-2 ${
          isSearchBoxOpen ? "gap-4" : "gap-12"
        }`}
      >
        <Dropdown />
        <SearchBox setIsSearchBoxOpen={setIsSearchBoxOpen} />
        <Link
          to="auth"
          className="underline mt-2 text-blue-600 hover:text-blue-500"
        >
          Đăng nhập
        </Link>
      </div>
    </div>
  );
};

export default Header;
