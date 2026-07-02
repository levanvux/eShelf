import { useLocation } from "react-router-dom";

const Reading = () => {
  const location = useLocation();
  const { state } = location;
  console.log(state);
  return (
    <iframe
      src={
        "https://jgkgghkhlpriakdssyki.supabase.co/storage/v1/object/public/public-eshelf" +
        (state ? state : "/pdfs/lorem-ipsum.pdf")
      }
      frameBorder="0"
      className="h-screen w-screen"
    ></iframe>
  );
};

export default Reading;
