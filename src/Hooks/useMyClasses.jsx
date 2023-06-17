
import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useMyClass = (email) => {
  const { user, loading } = useContext(AuthContext);
  const { refetch, data: myClasses = [] } = useQuery({
    queryKey: ["myClasses", user?.email],
    enabled: !loading,

    queryFn: async () => {
      const res = await axios.get(
        `https://assignment-12-server-eight-brown.vercel.app/addClasses/myClass?email=${user?.email}`
      );
      return res.data;
    },
  });
  return [myClasses, refetch];
};

export default useMyClass;
