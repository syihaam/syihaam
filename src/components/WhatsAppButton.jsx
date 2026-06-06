import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/6285213215030"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}
