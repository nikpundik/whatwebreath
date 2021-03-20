import { useEffect, useState } from "react";

const Loader = ({ text = "Loading" }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const i = setInterval(() => {
      setIndex((prev) => (prev === 3 ? 0 : prev + 1));
    }, 500);
    return () => clearInterval(i);
  }, []);
  return `${text}${Array(index + 1).join(".")}`;
};

export default Loader;
