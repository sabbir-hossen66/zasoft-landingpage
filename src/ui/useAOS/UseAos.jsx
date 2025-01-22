import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAOS = (options = {}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      ...options,
    });

    // Cleanup to refresh AOS instances
    return () => AOS.refresh();
  }, [options]);
};

export default useAOS;
