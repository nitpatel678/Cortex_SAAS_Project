import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min"; // 👈 You can switch to BIRDS, FOG, etc.

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: "#a855f7",      // Your purple
          backgroundColor: "#ffffff", // Or transparent if overlaying
          points: 12.0,
          maxDistance: 20.0,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="absolute inset-0 -z-10" />;
};

export default VantaBackground;
