import { useEffect, useState } from 'react';

declare global {
  interface Window {
    AMap: any;
    _AMapSecurityConfig: {
      securityJsCode: string;
    };
  }
}

const AMapKey = 'f43c25154b017c9ffbf4af654bed6a7a';
const AMapVersion = '2.0';
const SecurityCode = 'a54fc62dfe8e98fa873244780a6193c5'; // You should replace this with your actual security code

export function useAMap() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if AMap is already loaded
    if (window.AMap) {
      setIsLoaded(true);
      return;
    }

    // Set security config
    window._AMapSecurityConfig = {
      securityJsCode: SecurityCode
    };

    // Load AMap script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = `https://webapi.amap.com/maps?v=${AMapVersion}&key=${AMapKey}&plugin=AMap.Scale,AMap.ToolBar`;
    
    script.onload = () => setIsLoaded(true);
    script.onerror = () => {
      console.error('Failed to load AMap');
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };

    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return isLoaded;
}