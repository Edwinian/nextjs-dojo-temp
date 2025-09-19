'use client';

import { useState, useEffect } from 'react';
import styles from './Timer.module.css';

export default function TimerPage() {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    // Effect to handle the timer
    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;
        if (isRunning) {
            timer = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 1000); // Increment every second
        }
        return () => {
            if (timer) clearInterval(timer); // Cleanup on unmount or when isRunning changes
        };
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setIsRunning(false);
        setCount(0);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Timer Page</h1>
            <p className={styles.count}>Count: {count}</p>
            <div className={styles.buttonGroup}>
                <button
                    onClick={handleStart}
                    className={`${styles.button} ${styles.startButton}`}
                    disabled={isRunning}
                >
                    Start
                </button>
                <button
                    onClick={handleStop}
                    className={`${styles.button} ${styles.stopButton}`}
                    disabled={!isRunning}
                >
                    Stop
                </button>
                <button
                    onClick={handleReset}
                    className={`${styles.button} ${styles.resetButton}`}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}