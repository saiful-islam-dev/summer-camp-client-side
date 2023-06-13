// import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useClass = () => {
  const [ classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5010/class")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        setLoading(false);
      });
  }, []);

  // const {data: allclass = [], isLoading: loading} = useQuery({
  //     queryKey: ['class'],
  //     queryFn: async() => {
  //         const res = await fetch('http://localhost:5010/class');
  //         return res.json();
  //     }
  // })

  return [classes, loading];
};

export default useClass;
