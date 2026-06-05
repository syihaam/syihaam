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
];

function getMessageForProgress(progress) {
  return welcomeMessages.reduce((prev, curr) =>
    progress >= curr.threshold ? curr : prev
  ).text;
}

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [contentFadeOut, setContentFadeOut] = useState(false);
  const [displayedMessage, setDisplayedMessage] = useState("Welcome");
  const [visible, setVisible] = useState(true);
  const [showFinal, setShowFinal] = useState(false);
  const [finalVisible, setFinalVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
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
      const t1 = setTimeout(() => {
        setContentFadeOut(true);
        const t2 = setTimeout(() => {
          setShowFinal(true);
          const t3 = setTimeout(() => {
            setFinalVisible(true);
          }, 100);
          const t4 = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
              if (onFinish) onFinish();
            }, 800);
          }, 3000);
        }, 600);
      }, 500);
      return () => clearTimeout(t1);
    }
  }, [progress, onFinish]);

  return (
    <div className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
      {!showFinal ? (
        <div className={`loading-content ${contentFadeOut ? "loading-content-hidden" : ""}`}>
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
      ) : (
        <div className="loading-final">
          <h1 className={`loading-final-text ${finalVisible ? "final-visible" : ""}`}>
            Welcome To My Portfolio
          </h1>
        </div>
      )}
      {!showFinal && (
        <div className="loading-particles">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="loading-particle" style={{ animationDelay: `${i * 0.25}s` }} />
          ))}
        </div>
      )}
    </div>
  );
}
