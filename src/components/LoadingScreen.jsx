import { useEffect, useState, useRef } from "react";
import "./LoadingScreen.css";

const welcomeMessages = [
  { threshold: 0, text: "Welcome" },
  { threshold: 10, text: "Selamat Datang" },
  { threshold: 20, text: "مرحباً" },
  { threshold: 30, text: "Bienvenue" },
  { threshold: 40, text: "Willkommen" },
  { threshold: 50, text: "ようこそ" },
  { threshold: 60, text: "欢迎" },
  { threshold: 70, text: "환영합니다" },
  { threshold: 80, text: "Benvenuto" },
  { threshold: 90, text: "Bem-vindo" },
  { threshold: 100, text: "Welcome To My Portfolio" },
];

function getMessageForProgress(progress) {
  return welcomeMessages.reduce((prev, curr) =>
    progress >= curr.threshold ? curr : prev
  ).text;
}

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [displayedMessage, setDisplayedMessage] = useState("Welcome");
  const [visible, setVisible] = useState(true);
  const targetMessage = useRef("Welcome");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = 1.5 + Math.random() * 2;
        return Math.min(prev + increment, 100);
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const newMessage = getMessageForProgress(progress);
    if (newMessage !== targetMessage.current) {
      targetMessage.current = newMessage;
      setVisible(false);
    }
  }, [progress]);

  useEffect(() => {
    if (!visible) {
      const t = setTimeout(() => {
        setDisplayedMessage(targetMessage.current);
        const t2 = setTimeout(() => setVisible(true), 50);
        return () => clearTimeout(t2);
      }, 250);
      return () => clearTimeout(t);
    }
  }, [visible]);

  useEffect(() => {
    if (progress === 100) {
      const t = setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          if (onFinish) onFinish();
        }, 800);
      }, 1200);
      return () => clearTimeout(t);
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
        <p className={`loading-message ${visible ? "visible" : "hidden"}`}>
          {displayedMessage}
        </p>
      </div>
      <div className="loading-particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="loading-particle" style={{ animationDelay: `${i * 0.3}s` }} />
        ))}
      </div>
    </div>
  );
}
