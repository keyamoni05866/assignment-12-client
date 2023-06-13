import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useClass = (email) => {
  const { user } = useContext(AuthContext);

  const {  refetch , data: selectClass = []} = useQuery(
    ["selectClass", user?.email],
    async () => {
      const res = await fetch(
        `http://localhost:5000/selectClasses?email=${user?.email}`
      );
      return res.json();
    }
  )
  return [selectClass,  refetch]
};

export default useClass;
