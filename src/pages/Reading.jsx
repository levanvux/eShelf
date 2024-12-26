import { useLocation } from "react-router-dom";

const Reading = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <iframe
      src={state ? state : "/pdfs/lorem-ipsum.pdf"}
      frameborder="0"
      className="h-screen w-screen"
    ></iframe>
  );
};

export default Reading;
