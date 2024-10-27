import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="pl-2">
      <h1>Úi!</h1>
      <p>Bình tĩnh huynh ơi.</p>
      <p>
        Lỗi: <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
