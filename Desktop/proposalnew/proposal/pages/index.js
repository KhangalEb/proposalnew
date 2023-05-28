import React, { useRef } from 'react';
import styles from './styles.module.css'; // adjust this import to your CSS file location
import { useRouter } from 'next/router';
import confetti from "canvas-confetti";
function MyComponent() {
  const containerRef = useRef(null);
  const router = useRouter();
  const handleClick = () => {
    confetti({
      particleCount: 100,
      spread: 100
    });
    containerRef.current.classList.add(styles['is-active']);
    setTimeout(() => {
      console.log("This will be logged after 4 seconds");
      router.push("/mainPage")
    }, 3500);

  };

  return (
    <div className="flex justify-center items-center h-screen w-full bg-blue-400">
      <div ref={containerRef} className={styles.container}>
        <div className={styles.envelope}>
          <div className={styles.paper}>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <div className={styles.noti}>1</div>
          </div>
        </div>
        <div className={styles.open}></div>
        <button
          className=" w-4/4 bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg  p-2 rounded"
          onClick={handleClick}
        >
          Нээх
        </button>
      </div>
    </div>
  );
}

export default MyComponent;
