import React, { useEffect, useRef } from 'react';
import { useAMap } from './useAMap';

declare global {
  interface Window {
    AMap: any;
  }
}

interface AMapComponentProps {
  center: [number, number];
  zoom?: number;
}

export function AMapComponent({ center, zoom = 15 }: AMapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const isLoaded = useAMap();

  useEffect(() => {
    if (!isLoaded || !mapRef.current || !window.AMap) return;

    // Initialize map
    mapInstance.current = new window.AMap.Map(mapRef.current, {
      zoom,
      center,
      resizeEnable: true,
      viewMode: '2D',
      lang: 'zh_cn',
      mapStyle: 'amap://styles/normal',
    });

    // Add marker
    const marker = new window.AMap.Marker({
      position: center,
      animation: 'AMAP_ANIMATION_DROP',
      title: 'ETH Wuhan Venue',
    });

    mapInstance.current.add(marker);

    // Add controls
    mapInstance.current.addControl(new window.AMap.Scale());
    mapInstance.current.addControl(
      new window.AMap.ToolBar({
        position: 'RB',
      })
    );

    return () => {
      if (mapInstance.current) {
        mapInstance.current.destroy();
      }
    };
  }, [center, zoom, isLoaded]);

  return (
    <div
      ref={mapRef}
      className="w-full h-72 rounded-lg shadow-sm relative overflow-hidden"
      style={{ minHeight: '300px' }}
    />
  );
}
