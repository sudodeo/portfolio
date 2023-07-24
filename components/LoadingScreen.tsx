import React from "react";
import styles from "../styles/Animations.module.css";
import Image from "next/image";

const LoadingScreen = () => {
  return (
    <div
      className={`fixed top-0 left-0 bottom-0 h-[110vh] w-full ${styles.loader} z-[999]`}
    >
      <div className="flex h-full w-full -translate-y-10 scale-50 items-center justify-center lg:-translate-y-5 lg:scale-100 ">
        <Image
          priority
          width={100}
          height={100}
          src="/favicons/small-icon.png"
          alt="icon"
        />

        <h1 className="text-5xl font-semibold">sudodeo</h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
