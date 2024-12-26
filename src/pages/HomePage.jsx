import SearchForm from "../components/book/SearchForm.jsx";
import SuggestedBooks from "../components/book/SuggestedBooks.jsx";
import Logo from "../components/common/Logo.jsx";
import Quote from "../components/common/Quote.jsx";
import bookDetails from "../data/book-details.json";

const HomePage = () => {
  return (
    <>
      <div className="mt-12 md:mt-20 lg:mt-24">
        <Logo fontSize="text-7xl" />
        <Quote />
      </div>
      <SearchForm />
      <div className="mx-4 mt-16 md:mx-24 lg:mx-44">
        <SuggestedBooks
          heading="Tủ sách gợi ý"
          bookDetails={bookDetails}
          totalDisplayedBooks={180}
        />
      </div>
    </>
  );
};

export default HomePage;
