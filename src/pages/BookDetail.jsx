import { useNavigate, useParams } from "react-router-dom";
import bookDetails from "../data/book-details.json";
import SuggestedBooks from "../components/book/SuggestedBooks";
import {
  ArrowLeft,
  Download,
  Heart,
  Bookmark,
  MessageSquareMore,
  Play,
} from "lucide-react";
import { useState } from "react";

const BookDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const book = bookDetails
    ? bookDetails.find((bookDetail) => bookDetail.isbn === id)
    : null;
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [isBookmarkClicked, setIsBookmarkClicked] = useState(false);
  const [comments, setComments] = useState([]);

  if (book) {
    return (
      <div className="px-8 md:px-20 lg:px-24">
        <p className="mb-4 flex cursor-pointer gap-1 text-gray-700">
          <ArrowLeft /> <span className="hover:underline">Quay Lại</span>
        </p>
        <div className="mb-20">
          <img
            className="float-left mr-8 h-96 w-64 rounded-sm object-cover drop-shadow-[0_0.2rem_0.2rem_rgba(0,0,0,0.5)]"
            src={book.coverUrl}
            alt=""
          />
          <p className="mb-1 text-2xl text-gray-800">{book.title}</p>
          <p className="mb-5 cursor-pointer text-sm text-sky-400">
            {book.author.map((au, index) => {
              return (
                <>
                  <a className="underline hover:text-sky-600">{au}</a>
                  {index !== book.author.length - 1 && ", "}
                </>
              );
            })}
          </p>
          <div className="mb-5 flex gap-4">
            <p className="flex cursor-pointer gap-1 text-gray-500 hover:text-gray-600 hover:underline">
              <MessageSquareMore />{" "}
              {`${comments.length} comment${comments.length !== 1 && "s"}`}
            </p>
            <Heart
              onClick={() => setIsHeartClicked(!isHeartClicked)}
              className={`cursor-pointer ${isHeartClicked ? "text-sky-400" : "text-gray-400 hover:text-gray-500"}`}
              fill={isHeartClicked ? "#38bdf8" : "#f9fafb"}
            />
            <Bookmark
              onClick={() => setIsBookmarkClicked(!isBookmarkClicked)}
              className={`cursor-pointer ${isBookmarkClicked ? "text-amber-400" : "text-gray-400 hover:text-gray-500"}`}
              fill={isBookmarkClicked ? "#fbbf24" : "#f9fafb"}
            />
          </div>
          {book.description && (
            <p className="mb-5 text-sm text-gray-700">
              <span className="text-gray-500">Giới thiệu:</span>{" "}
              {book.description}
            </p>
          )}
          <div className="mb-5 grid grid-cols-2 gap-x-12 gap-y-2 text-sm text-gray-700">
            {book.genres.length > 0 && (
              <p className="cursor-pointer">
                <span className="text-gray-500">Thể loại:</span>{" "}
                {book.genres.join(", ")}
              </p>
            )}

            {book.language && (
              <p>
                <span className="text-gray-500">Ngôn ngữ:</span> {book.language}
              </p>
            )}
            {book.year && (
              <p>
                <span className="text-gray-500">Năm:</span> {book.year}
              </p>
            )}
            {book.publisher && (
              <p>
                <span className="text-gray-500">Nhà xuất bản:</span>{" "}
                {book.publisher}
              </p>
            )}

            {book.translator.length > 0 && (
              <p>
                <span className="text-gray-500">Người dịch:</span>{" "}
                {book.translator.join(", ")}
              </p>
            )}

            {book.isbn && (
              <p>
                <span className="text-gray-500">Mã:</span> {book.isbn}
              </p>
            )}
            {book.extension && book.size && (
              <p>
                <span className="text-gray-500">File:</span> {book.extension},{" "}
                {book.size}
              </p>
            )}
          </div>
          <div className="flex gap-2">
            <button
              className="flex gap-1 rounded bg-sky-400 px-5 py-2 text-white hover:bg-sky-300"
              onClick={() =>
                navigate(`/reading/${book.isbn}`, { state: book.pdfUrl })
              }
            >
              <Play />
              Đọc sách
            </button>
            <button className="flex gap-1 rounded border border-gray-300 px-5 py-2 text-gray-600 hover:border-sky-400">
              <Download />
              Tải xuống
            </button>
            <p
              className="cursor-pointer py-2 text-amber-400 underline hover:text-amber-500"
              onClick={() => navigate("/feedback")}
            >
              Báo cáo lỗi?
            </p>
          </div>
        </div>
        <SuggestedBooks
          heading="Bạn có thể sẽ thích"
          bookDetails={bookDetails}
          totalDisplayedBooks={24}
          chosenBookIsbn={id}
        />
      </div>
    );
  }
};

export default BookDetail;
