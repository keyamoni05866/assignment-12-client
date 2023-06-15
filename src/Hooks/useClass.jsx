import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";
import axios from "axios";

const useClass = (email) => {
  const { user, loading } = useContext(AuthContext);
  const {  refetch , data: selectClass = []} = useQuery(
    ["selectClass", user?.email],
    
    async () => {
      const res = await axios.get(
        `http://localhost:5000/selectClasses?email=${user?.email}`
      );
      return res.data;
    }
  )
  return [selectClass,  refetch]
};

export default useClass;
