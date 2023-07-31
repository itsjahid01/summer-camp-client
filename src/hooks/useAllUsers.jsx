import { useQuery } from "@tanstack/react-query";

const useAllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      return res.json();
    },
  });
  return [users, refetch];
};

export default useAllUsers;
