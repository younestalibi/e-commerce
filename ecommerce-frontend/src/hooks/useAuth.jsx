import { useEffect } from 'react';
import {useNavigate } from 'react-router-dom';

const useAuth = () => {
  const navigate = useNavigate();
  const isAuthenticated =localStorage.getItem("user");
  useEffect(() => {
    
    if (!isAuthenticated) {
      // navigate('/');
    }
  }, [isAuthenticated]);

  return null; 
};

export default useAuth;
