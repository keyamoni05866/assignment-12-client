import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
    }else{
        Swal.fire({
            title: 'Please Login First for Access This Route',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK!'
          })
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
};

export default PrivateRoutes;