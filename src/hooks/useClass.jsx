// import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useClass = () => {
  const [ classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://b7a12-summer-camp-server-side-saiful264-saiful264.vercel.app/class")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        setLoading(false);
      });
  }, []);

  return [classes, loading];
};

export default useClass;
