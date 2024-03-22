import React, { useEffect, useState } from 'react';

// useOnlineStatus hook definition
export const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine); // Initialize with the current online status

  useEffect(() => {
    const goOnline = () => setOnlineStatus(true);
    const goOffline = () => setOnlineStatus(false);

    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);

    // Cleanup listeners on component unmount
    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);

  return onlineStatus;
};
