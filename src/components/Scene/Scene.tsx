/* eslint-disable react/no-unknown-property */
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Box } from "components/Box/Box";
import Frame from "components/Frame/Frame";
import { motion } from "framer-motion-3d";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { Group } from "three";

const Scene = () => {
  const objectsRef = useRef<Group>(null);
  const scroll = useScroll();
  const timeline = useRef<gsap.core.Timeline>();

  useFrame(() => {
    timeline.current?.seek(scroll.offset * timeline.current.duration());
  });
  useLayoutEffect(() => {
    timeline.current = gsap.timeline();

    timeline.current.to(
      objectsRef.current?.position as gsap.TweenTarget,
      {
        duration: 2,
        x: 13,
        y: 2.5,
        z: -3.5,
      },
      0
    );
  }, []);

  

  return (
    <>
      <color attach="background" args={["#A9A9A9"]}></color>
      <ambientLight  color="#fff" intensity={0.85} />
      <group ref={objectsRef} >
        <motion.group position={[1, 1, 1]} key={'Obj1'}>
          <Box />
          <Frame group={objectsRef} focusRange={[3.5, 4.5]} />
        </motion.group>

        <motion.group position={[-15, -3, 2]} key={'Obj2'}>
          <Box />
          <Frame group={objectsRef} focusRange={[10, 12]} />
        </motion.group> 
        
      </group>
    </>
  );
};

export default Scene;
