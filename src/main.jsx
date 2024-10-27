import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import Categories from "./pages/Categories.jsx";
import BookReview from "./pages/BookReview.jsx";
import Feedback from "./pages/Feedback.jsx";
import Donate from "./pages/Donate.jsx";
import LoginRegister from "./pages/LoginRegister.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <App />,
  },
  {
    path: "categories",
    element: <Categories />,
  },
  {
    path: "review",
    element: <BookReview />,
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
    path: "auth",
    element: <LoginRegister />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
