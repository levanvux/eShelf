import { useState } from "react";

const Feedback = () => {
  const [errorType, setErrorType] = useState("book");
  const [content, setContent] = useState("");

  return (
    <>
      <div className="mx-auto my-10 max-w-5xl rounded-xl border border-sky-300 bg-white p-6 shadow-sm">
        <h1 className="mb-8 text-center text-3xl font-bold text-sky-500">
          GỬI PHẢN HỒI CHO CHÚNG TÔI
        </h1>

        {/* Loại lỗi */}
        <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-start">
          <label className="font-medium text-gray-700 md:w-40 md:pt-3">
            Loại lỗi:
          </label>

          <div className="flex flex-1 flex-col gap-3 md:flex-row">
            <select
              value={errorType}
              onChange={(e) => setErrorType(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
            >
              <option value="book">Lỗi sách</option>
              <option value="account">Lỗi tài khoản</option>
              <option value="donate">Lỗi donate - ủng hộ</option>
              <option value="other">Khác</option>
            </select>

            {errorType === "book" && (
              <select className="w-full rounded-lg border border-gray-300 p-3 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200">
                <option>Sách không xem được</option>
                <option>Sách sai định dạng</option>
                <option>Không đúng với lời giới thiệu</option>
                <option>Nội dung không phù hợp</option>
                <option>Khác</option>
              </select>
            )}

            {errorType === "account" && (
              <select className="w-full rounded-lg border border-gray-300 p-3 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200">
                <option>Tài khoản bị khoá</option>
                <option>Mất dữ liệu cá nhân</option>
                <option>Khác</option>
              </select>
            )}

            {errorType === "donate" && (
              <select className="w-full rounded-lg border border-gray-300 p-3 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200">
                <option>Thanh toán không đúng số tiền</option>
                <option>Chưa được hệ thống công nhận</option>
                <option>Khác</option>
              </select>
            )}
          </div>
        </div>

        {/* Nội dung */}
        <div className="mb-8 flex flex-col gap-2 md:flex-row">
          <label className="font-medium text-gray-700 md:w-40 md:pt-3">
            <span className="text-red-500">*</span> Nội dung chi tiết:
          </label>

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            className="flex-1 rounded-lg border border-gray-300 p-3 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
          />
        </div>

        {/* Button */}
        <button
          className="mx-auto block rounded-lg bg-teal-500 px-8 py-3 text-lg font-semibold text-white transition hover:bg-teal-400"
          onClick={() => {
            if (content.trim()) {
              const ans = confirm("Bạn có chắc chắn muốn gửi?");
              if (ans) {
                setContent("");
              }
            } else {
              alert("Vui lòng nhập nội dung chi tiết.");
            }
          }}
        >
          Gửi
        </button>
      </div>

      {/* Contact */}
      <div className="mx-auto mb-10 max-w-5xl rounded-xl border bg-gray-50 p-6 text-gray-800 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">Thông tin liên hệ</h2>

        <p className="mb-2 text-sm">
          <span className="font-medium text-gray-500">Địa chỉ:</span>{" "}
          Toà nhà Chọc Trời, TP.HCM, Việt Nam
        </p>

        <p className="mb-2 text-sm">
          <span className="font-medium text-gray-500">Số điện thoại:</span>{" "}
          0123456789
        </p>

        <p className="text-sm">
          <span className="font-medium text-gray-500">Email:</span>{" "}
          <span className="cursor-pointer text-sky-500 hover:underline">
            deptrai@gmail.com
          </span>
        </p>
      </div>
    </>
  );
};

export default Feedback;