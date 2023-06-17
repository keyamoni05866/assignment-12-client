
import { useContext } from "react";

import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";

const useInstructor =() =>{
      const {user, loading} = useContext(AuthContext);


      const {data: isInstructor} = useQuery({
        queryKey:['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async() =>{
            const res = await axios.get(`https://assignment-12-server-eight-brown.vercel.app/users/instructor/${user?.email}`);
            
            return res.data.role === "instructor";
        }
      })
      return [isInstructor]
}

export default useInstructor;