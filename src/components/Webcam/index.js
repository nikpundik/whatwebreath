import React, { useRef, useEffect } from "react";

import styles from "./Webcam.module.css";

function Webcam() {
  const videoRef = useRef();
  useEffect(() => {
    let stream;
    const load = async () => {
      try {
        if (navigator.mediaDevices) {
          const newStream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false,
          });
          stream = newStream;
          videoRef.current.srcObject = newStream;
        }
      } catch (e) {}
    };
    load();
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, []);
  return (
    <video className={styles.webcam} ref={videoRef} autoPlay={true}></video>
  );
}

export default Webcam;
