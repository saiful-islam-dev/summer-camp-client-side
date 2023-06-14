import { useEffect, useState } from "react";

const useInstructor = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://b7a12-summer-camp-server-side-saiful264-saiful264.vercel.app/instructor")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
        setLoading(false);
      });
  }, []);

  return [instructors, loading];
};

export default useInstructor;
