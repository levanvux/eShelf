import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";

const SearchBox = (props) => {
  const { setIsSearchBoxOpen } = props;

  // Có mở ô tìm kiếm ra không
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => {
    setIsEditing(true);
    setIsSearchBoxOpen(true);
  };

  // Nội dung nhập vào ô tìm kiếm
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Ô nhập tự thu nhỏ khi click chuột ra ngoài
  const searchBoxRef = useRef(null);

  const handleClickOutside = (event) => {
    if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
      setIsEditing(false);
      setIsSearchBoxOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {isEditing ? (
        <div className="flex border rounded px-2 py-1" ref={searchBoxRef}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            className="focus:outline-none mr-2"
            placeholder="Tìm kiếm sách"
          />
          <button className="hover:bg-gray-300 p-1 rounded">
            <Search size={20} color="#888" />
          </button>
        </div>
      ) : (
        <button
          className="text-black opacity-70 hover:opacity-100 "
          onClick={toggleEditing}
        >
          <Search size={28} />
        </button>
      )}
    </>
  );
};

export default SearchBox;
