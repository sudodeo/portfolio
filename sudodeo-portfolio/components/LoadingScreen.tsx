import React from "react";
import styles from "../styles/Animations.module.css";

const LoadingScreen = () => {
  return (
    <div
      className={`relative h-screen w-full flex items-center justify-center scale-50  lg:scale-100 -translate-y-5 lg:translate-y-0 ${styles.loader}`}
    >
      <img src="./favicons/small-icon.png" alt="icon" />

      <h1 className="text-5xl font-semibold">sudodeo</h1>
    </div>
  );
};

export default LoadingScreen;
