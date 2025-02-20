export const setAuthToken = (token) => {
    if (token) {
      localStorage.setItem('authToken', token);
      localStorage.setItem('loginTimestamp', Date.now().toString());
    } else {
      localStorage.removeItem('authToken');
      localStorage.removeItem('loginTimestamp');
    }
  };
  
  export const getAuthToken = () => {
    const token = localStorage.getItem('authToken');
    const loginTimestamp = localStorage.getItem('loginTimestamp');
    
    if (token && loginTimestamp) {
      // Check if 30 minutes have passed
      const thirtyMinutes = 30 * 60 * 1000; // in milliseconds
      const now = Date.now();
      const tokenAge = now - parseInt(loginTimestamp);
      
      if (tokenAge > thirtyMinutes) {
        // Token has expired
        setAuthToken(null);
        return null;
      }
      return token;
    }
    return null;
  };
  
  export const isAuthenticated = () => {
    return getAuthToken() !== null;
  };

  export const getUserInfo = () => {
    try {
      const userInfo = localStorage.getItem('userInfo');
      return userInfo ? JSON.parse(userInfo) : null;
    } catch (error) {
      console.error('Error getting user info:', error);
      return null;
    }
  };