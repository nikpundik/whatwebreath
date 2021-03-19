import React, { useRef, useEffect } from 'react'

import styles from "./Webcam.module.css";

function Webcam() {
  const videoRef = useRef();
  useEffect(() => {
    const load = async () => {
      if (navigator.mediaDevices) {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        videoRef.current.srcObject = stream;
      }
    };
    load();
  }, []);
  return (
    <video className={styles.webcam} ref={videoRef} autoPlay={true}></video>
  )
}

export default Webcam;