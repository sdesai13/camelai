"use client";
import { FaRocket, FaShieldAlt, FaLock, TBlet } from "react-icons/fa"; // Example icons
import { TbSquareLetterYFilled } from "react-icons/tb";

export default function Badges() {
  return (
    <div className="badges">
      <span className="badge">
        <TbSquareLetterYFilled className="badge-icon" /> Y Combinator backed
      </span>
      <span className="badge">
      <FaLock className="badge-icon" /> Enterprise Security
      </span>
      <span className="badge">
        <FaShieldAlt className="badge-icon" /> 100% Data Privacy
      </span>
    </div>
  );
}
