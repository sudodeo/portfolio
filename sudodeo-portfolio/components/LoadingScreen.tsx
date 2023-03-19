import React from "react";
import styles from "../styles/Animations.module.css";

const LoadingScreen = () => {
  return (
    <div
      className={`fixed top-0 left-0 bottom-0 h-screen w-full flex items-center justify-center scale-50  lg:scale-100 -translate-y-5 lg:translate-y-0 ${styles.loader} z-[1000]`}
    >
      <img src="./favicons/small-icon.png" alt="icon" />

      <h1 className="text-5xl font-semibold">sudodeo</h1>
    </div>
  );
};

export default LoadingScreen;
