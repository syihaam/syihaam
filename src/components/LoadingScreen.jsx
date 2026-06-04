import { useEffect, useState } from "react";
import "./LoadingScreen.css";

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.random() * 15 + 5;
        return Math.min(prev + increment, 100);
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          if (onFinish) onFinish();
        }, 800);
      }, 400);
    }
  }, [progress, onFinish]);

  return (
    <div className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="loading-content">
        <div className="loading-logo">
          <div className="loading-logo-ring" />
          <span className="loading-logo-text">P</span>
        </div>
        <div className="loading-bar-container">
          <div className="loading-bar">
            <div className="loading-bar-fill" style={{ width: `${progress}%` }} />
          </div>
          <span className="loading-percent">{Math.floor(progress)}%</span>
        </div>
        <p className="loading-text">Loading Portfolio</p>
      </div>
      <div className="loading-particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="loading-particle" style={{ animationDelay: `${i * 0.3}s` }} />
        ))}
      </div>
    </div>
  );
}
