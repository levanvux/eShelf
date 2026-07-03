import { Heart, Bookmark } from "lucide-react";
import { useState } from "react";

const SearchResultItem = ({ bookDetail = null }) => {
  const convertText = (input) => {
    if (!input) {
      return "";
    }
    const output = input
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/\s+/g, "")
      .replace(/\&/g, "-");
    return output;
  };

  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [isBookmarkClicked, setIsBookmarkClicked] = useState(false);

  return (
    <>
      {bookDetail && bookDetail.coverUrl && bookDetail.title && (
        <div className="flex gap-4 px-4 py-5">
          <a href={`/book/${bookDetail.isbn}`} target="_blank">
            <img
              src={bookDetail.coverUrl}
              alt={bookDetail.title}
              className="float-left mr-3 aspect-[5/7] w-24 rounded-sm object-cover drop-shadow-[0_0.1rem_0.1rem_rgba(0,0,0,0.5)]"
            />
          </a>
          <div className="relative flex-grow">
            <p className="w-64 md:w-auto">
              <a
                href={`/book/${bookDetail.isbn}`}
                target="_blank"
                className="cursor-pointer underline"
              >
                {bookDetail.title}
              </a>
            </p>
            <p>
              <a
                className="cursor-pointer text-sm text-gray-400 hover:text-blue-700"
                href={`/search/${convertText(bookDetail.publisher)}&-&`}
                target="_blank"
              >
                {bookDetail.publisher ? bookDetail.publisher : ""}
              </a>
            </p>
            <p className="cursor-pointer text-[0.925rem] text-sky-400 md:mt-2">
              {bookDetail.author && bookDetail.author.length > 0 ? (
                bookDetail.author.map((au, index) => {
                  return (
                    <a
                      href={`/search/${convertText(bookDetail.author.map(convertText).join("+"))}&-&`}
                      key={index}
                    >
                      <span className="hover:underline">{au}</span>
                      {index < bookDetail.author.length - 1 && ", "}
                    </a>
                  );
                })
              ) : (
                <span className="hover:underline">Tác giả ẩn danh</span>
              )}
            </p>
            <Heart
              onClick={() => setIsHeartClicked(!isHeartClicked)}
              className={`absolute bottom-0 right-12 cursor-pointer md:bottom-auto md:top-0 ${isHeartClicked ? "text-sky-400" : "text-gray-400 hover:text-gray-500"}`}
              fill={isHeartClicked ? "#38bdf8" : "#fff"}
            />
            <Bookmark
              onClick={() => setIsBookmarkClicked(!isBookmarkClicked)}
              className={`absolute bottom-0 right-4 cursor-pointer md:bottom-auto md:top-0 ${isBookmarkClicked ? "text-amber-400" : "text-gray-400 hover:text-gray-500"}`}
              fill={isBookmarkClicked ? "#fbbf24" : "#fff"}
            />
            <p className="text-[0.925rem] text-gray-500 md:absolute md:bottom-0 md:right-0">
              {bookDetail.year && (
                <>
                  Năm:{" "}
                  <span className="mr-4 text-gray-800">{bookDetail.year}</span>
                </>
              )}
              <br className="md:hidden" />
              {bookDetail.language && (
                <>
                  Ngôn ngữ:{" "}
                  <span className="mr-4 text-gray-800">
                    {bookDetail.language}
                  </span>
                </>
              )}
              <br className="md:hidden" />
              {bookDetail.extension && bookDetail.size && (
                <>
                  File:{" "}
                  <span className="mr-4 text-gray-800">
                    {bookDetail.extension + ", " + bookDetail.size}
                  </span>
                </>
              )}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchResultItem;
