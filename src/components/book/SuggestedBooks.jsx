import { useNavigate } from "react-router-dom";

const SuggestedBooks = ({
  heading,
  totalDisplayedBooks = 6,
  bookDetails = [],
  chosenBookIsbn = null,
}) => {
  const navigate = useNavigate();
  const filteredBookDetails = chosenBookIsbn
    ? bookDetails.filter(
        (bookDetail) => bookDetail.isbn.trim() !== chosenBookIsbn.trim(),
      )
    : bookDetails;
  const chosenBook = chosenBookIsbn
    ? bookDetails.find(
        (bookDetail) => bookDetail.isbn.trim() === chosenBookIsbn.trim(),
      )
    : null;

  const suggestedBooks = [];
  const relatedBooks = [];

  if (bookDetails && bookDetails.length !== 0) {
    let count = 0;
    while (count < totalDisplayedBooks) {
      let bookDetail = filteredBookDetails[count % filteredBookDetails.length];
      if (
        chosenBook &&
        chosenBook.genres &&
        chosenBook.genres.some(
          (genre) => bookDetail.genres && bookDetail.genres.includes(genre),
        )
      ) {
        relatedBooks.push(bookDetail);
        filteredBookDetails[count % filteredBookDetails.length] =
          filteredBookDetails[filteredBookDetails.length - 1];
        filteredBookDetails[filteredBookDetails.length - 1] = bookDetail;
        filteredBookDetails.pop();
      } else {
        suggestedBooks.push(bookDetail);
      }
      count++;
    }
  }

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const shuffledSuggestedBooks = shuffleArray(suggestedBooks);

  return (
    <>
      <p className="mb-5 border-b-2 border-b-sky-400 pb-2 text-xl text-sky-400">
        {heading}
      </p>
      <div className="mb-10 flex flex-wrap justify-around gap-y-3 md:justify-between">
        {relatedBooks.length > 0 &&
          relatedBooks.map((book) => (
            <a
              href={`/book/${book.isbn}`}
              target="_blank"
              key={crypto.randomUUID()}
            >
              <img
                src={book.coverUrl}
                className="aspect-[5/7] w-48 rounded-sm object-cover drop-shadow-[0_0.2rem_0.2rem_rgba(0,0,0,0.5)] 2xl:w-52"
                title={book.title}
                alt={"Bìa " + book.title}
              />
            </a>
          ))}

        {shuffledSuggestedBooks.length > 0 &&
          shuffledSuggestedBooks.map((book) => (
            <a
              href={`/book/${book.isbn}`}
              target="_blank"
              onClick={navigate({ state: { book } })}
              key={crypto.randomUUID()}
            >
              <img
                src={book.coverUrl}
                className="aspect-[5/7] w-48 rounded-sm object-cover drop-shadow-[0_0.2rem_0.2rem_rgba(0,0,0,0.5)] 2xl:w-52"
                title={book.title}
                alt={"Bìa " + book.title}
              />
            </a>
          ))}
      </div>
    </>
  );
};

export default SuggestedBooks;
