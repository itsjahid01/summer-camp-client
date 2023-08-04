import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useSelectedClasses = () => {
  const { user, loading } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");
  // console.log(token);

  const { refetch, data: classes = [] } = useQuery({
    queryKey: ["classes", user?.email],
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/selectedClasses?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });
  return [classes, refetch];
};
export default useSelectedClasses;
