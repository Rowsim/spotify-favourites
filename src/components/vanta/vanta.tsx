import React, { useContext, useEffect, useRef, useState } from "react";
import styled, { ThemeContext } from "styled-components";

import * as THREE from "three";
// @ts-ignore
import BIRDS from "vanta/dist/vanta.birds.min";

export const VantaWrapper = ({ children }: any) => {
  const [vantaEffect, setVantaEffect] = useState(0 as any);
  const vantaRef = useRef(null);
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE: THREE,
          backgroundColor: themeContext.background,
          color1: themeContext.secondary,
          color2: themeContext.background,
          wingSpan: 40.0,
          speedLimit: 6.0,
          separation: 60.0,
          alignment: 5.0,
          quantity: 1.5,
        })
      );

      setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
      }, 200);

      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }
  }, [themeContext.background, themeContext.secondary, vantaEffect]);

  return <VantaContainer ref={vantaRef}>{children}</VantaContainer>;
};

const VantaContainer = styled.div`
  canvas {
    z-index: -1 !important;
    max-height: 30%;
  }
`;
