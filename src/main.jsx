import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import Genres from "./pages/Genres.jsx";
import Feedback from "./pages/Feedback.jsx";
import Donate from "./pages/Donate.jsx";
import LoginRegister from "./pages/LoginRegister.jsx";
import BookDetail from "./pages/BookDetail.jsx";
import HomePage from "./pages/HomePage.jsx";
import SearchResult from "./pages/SearchResult.jsx";
import Reading from "./pages/Reading.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "genres",
        element: <Genres />,
      },
      {
        path: "search/:searchvalues",
        element: <SearchResult />,
      },
      {
        path: "feedback",
        element: <Feedback />,
      },
      {
        path: "donate",
        element: <Donate />,
      },
      {
        path: "/book/:id",
        element: <BookDetail />,
      },
      {
        path: "/feedback",
        element: <Feedback />,
      },
    ],
  },
  {
    path: "auth",
    element: <LoginRegister />,
  },
  {
    path: "reading/:id",
    element: <Reading />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
