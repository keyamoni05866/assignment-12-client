import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

import axios from "axios";

const useClass = (email) => {
  const { user, loading } = useContext(AuthContext);
  const { refetch, data: selectClass = [] } = useQuery({
    queryKey: ["selectClass", user?.email],
    enabled: !loading,

    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/selectClasses?email=${user?.email}`
      );
      return res.data;
    },
  });
  return [selectClass, refetch];
};

export default useClass;
