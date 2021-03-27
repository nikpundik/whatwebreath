import React, { useRef, useEffect } from "react";

import styles from "./Webcam.module.css";

function Webcam({ setShowWebcam }) {
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
        } else setShowWebcam(false);
      } catch (e) {
        setShowWebcam(false);
      }
    };
    load();
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, [setShowWebcam]);
  return (
    <video className={styles.webcam} ref={videoRef} autoPlay={true}></video>
  );
}

export default Webcam;
