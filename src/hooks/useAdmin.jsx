import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");

  const {
    data: role = {},
    refetch,
    isLoading: isRoleLoading,
  } = useQuery({
    queryKey: ["role", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/users/admin/${user?.email}`,
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
  return [role, isRoleLoading, refetch];
};

export default useAdmin;