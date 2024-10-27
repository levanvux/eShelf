import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  List,
  Star,
  CircleDollarSign,
  MessageSquareWarning,
} from "lucide-react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={`text-black opacity-70 hover:opacity-100 flex items-center justify-center w-10 h-10 transition-transform duration-300 ${
          isOpen ? "rotate-90" : ""
        }`}
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}{" "}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
          <Link
            to="categories"
            className="px-4 py-2 block hover:bg-black hover:text-white cursor-pointer"
          >
            <List className="inline mr-3" />
            Mục Lục
          </Link>
          <Link
            to="review"
            className="px-4 py-2 block hover:bg-black hover:text-white cursor-pointer"
          >
            <Star className="inline mr-3" />
            Review Sách
          </Link>
          <Link
            to="feedback"
            className="px-4 py-2 block hover:bg-black hover:text-white cursor-pointer"
          >
            <MessageSquareWarning className="inline mr-3" />
            Báo Lỗi
          </Link>
          <Link
            to="donate"
            className="px-4 py-2 block hover:bg-black hover:text-white cursor-pointer"
          >
            <CircleDollarSign className="inline mr-3" />
            Ủng Hộ
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
