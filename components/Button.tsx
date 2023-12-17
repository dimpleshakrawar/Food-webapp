import React, { FC, ReactNode, MouseEvent } from "react";

interface IButtonProps {
  label?: string;
  backgroundColor?: string;
  hoverColor?: string;
  icon?: ReactNode;
  iconSize?: Number;
  text?: string;
  hoverText?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
  label,
  backgroundColor,
  icon,
  iconSize,
  text,
  hoverText,
  onClick,
}: IButtonProps) {
  return (
    <button
      className={`flex outline outline-2 outline-${backgroundColor} focus:bg-red-600  focus:text-white items-center gap-1 px-3 py-2 rounded-full text-${text} text- hover:bg-red-700  hover:text-${hoverText}`}
      onClick={onClick}
    >
      {icon &&
        React.cloneElement(icon as React.ReactElement, { size: iconSize })}
      {label}
    </button>
  );
}
