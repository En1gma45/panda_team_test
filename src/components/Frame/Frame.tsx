/* eslint-disable react/no-unknown-property */
import { useThree, useFrame } from "@react-three/fiber";
import { useState, useRef } from "react";
import { Group, Mesh } from "three";

interface IFrameProps {
  group: React.RefObject<Group>;
  focusRange: [number, number];
}

const Frame: React.FC<IFrameProps> = ({ group, focusRange }) => {
  const { camera } = useThree();
  const [showSquare, setShowSquare] = useState(true);
  const objectsRef = useRef<Mesh>(null);

  useFrame(() => {
    if (group.current === null) {
      return;
    }
    const distance = camera.position.distanceTo(group.current.position);
    // console.log(distance, focusRange, showSquare, );
    
    if (distance >= focusRange[0] && distance <= focusRange[1]) {
      setShowSquare(true);
    } else {
      setShowSquare(false);
    }
  });


  return (
    <mesh scale={[1.5, 1.5, 1.5]} visible={showSquare} ref={objectsRef}>
      <boxGeometry />
      <meshPhongMaterial color="#ff0000" opacity={0.1} transparent />
    </mesh>
  );
};

export default Frame;
