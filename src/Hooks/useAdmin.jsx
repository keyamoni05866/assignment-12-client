import { useContext } from "react";

import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";

const useAdmin =() =>{
      const {user, loading} = useContext(AuthContext);


      const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey:['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async() =>{
            const res = await axios.get(`https://assignment-12-server-eight-brown.vercel.app/users/admin/${user?.email}`);
            // console.log('is admin response', res.data)
            return res.data.role === 'admin';
        }
      })
      return [isAdmin, isAdminLoading]
}

export default useAdmin;