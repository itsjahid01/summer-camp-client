import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useSelectedClasses = () => {
  const { user } = useContext(AuthContext);

  const { refetch, data: classes = [] } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/selectedClasses?email=${user?.email}`).then(
        (res) => res.json()
      ),
  });
  return [classes, refetch];
};
export default useSelectedClasses;
