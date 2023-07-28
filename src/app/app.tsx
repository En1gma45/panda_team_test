/* eslint-disable react/no-unknown-property */
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "components/Loader/Loader";
import "./app.module.css";
import { ScrollControls } from "@react-three/drei";
import Scene from "components/Scene/Scene";

const App: React.FC = () => {
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <Canvas
        shadows
        camera={{ position: [3, 1.5, 2.5], fov: 60 }}
        style={{ height: "100%" }}
      >
        <Suspense fallback={<Loader />}>
          <ScrollControls pages={2}>
            <ambientLight color={'#fff'}/>
            <Scene />
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default App;
