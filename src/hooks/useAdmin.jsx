import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const {
    data: role,
    refetch,
    isLoading: isRoleLoading,
  } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      // console.log("res from axios", res);
      return res.data;
    },
  });
  return [role, isRoleLoading, refetch];
};

export default useAdmin;

// queryFn: async () => {
//       const res = await fetch(
//         `https://summer-camp-server-side-peach.vercel.app/users/admin/${user?.email}`,
//         {
//           headers: {
//             authorization: `bearer ${token}`,
//           },
//         }
//       );
//       const data = await res.json();
//       return data;
//     },
