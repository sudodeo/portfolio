import React from "react";
import styles from "../styles/Animations.module.css";

const LoadingScreen = () => {
  return (
    <div
      className={`fixed top-0 left-0 bottom-0 h-[110vh] w-full ${styles.loader} z-[999]`}
    >
      <div className="flex items-center justify-center scale-50 lg:scale-100 h-full w-full -translate-y-10 lg:-translate-y-5 ">
        <img src="./favicons/small-icon.png" alt="icon" />

        <h1 className="text-5xl font-semibold">sudodeo</h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
