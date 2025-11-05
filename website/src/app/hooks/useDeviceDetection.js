import { useState, useEffect } from 'react';

export const useDeviceDetection = () => {
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent));
    setIsAndroid(/Android/.test(navigator.userAgent));
  }, []);

  return { isIOS, isAndroid };
};