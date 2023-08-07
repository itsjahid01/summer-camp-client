import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const usePayment = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      // console.log("res from axios", res);
      return res.data;
    },
  });
  return [payments, refetch];
};

export default usePayment;
