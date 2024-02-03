import { ReactNode, useState } from "react";
import "../styles/card.css";
interface Props {
  children: ReactNode;
  roundness?: number;
  optClass?: string;
  onClick?: () => void;
}

function Card({ children, roundness, onClick, optClass }: Props) {
  return (
    <div className={`card ${optClass}`} onClick={onClick} style={{ borderRadius: roundness }}>
      {children}
    </div>
  );
}

export default Card;
